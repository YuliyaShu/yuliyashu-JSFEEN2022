import { SourcesUnit, SourcesSources } from '../../interfaces/sourcesInterface';
import './sources.css';

class Sources {
    draw(data: SourcesSources): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp');

        if (sourceItemTemp instanceof HTMLTemplateElement) {
            data.forEach((item: SourcesUnit) => {
                const sourceClone = sourceItemTemp?.content.cloneNode(true);
                if (sourceClone instanceof DocumentFragment) {
                    const sourceCloneElement: HTMLElement | null = sourceClone?.querySelector('.source__item-name');
                    if (sourceCloneElement) {
                        sourceCloneElement.textContent = item.name;
                        sourceCloneElement.setAttribute('data-source-id', item.id);
                    }
                    fragment.append(sourceClone);
                }
            });
            document.querySelector<HTMLElement>('.sources')?.append(fragment);
        }
    }
}

export default Sources;
