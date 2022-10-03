import {
  Component,
  OnInit,
  Input,
  Injectable,
  TemplateRef,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BackendService } from 'src/app/backend.service';

@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() title = '';
  @Input() description = '';
  @Input() id = '';

  constructor(
    private backend: BackendService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {}

  open(content: TemplateRef<any>) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
    });
  }

  deleteBoard(id: string) {
    return this.backend.deleteBoard(id).subscribe((resp) => {
      window.location.reload();
      return resp;
    });
  }

  getAttributes(title: string, id: string, description: string) {
    this.title = title;
    this.id = id;
    this.description = description;
    localStorage.setItem('boardTitle', title);
    localStorage.setItem('boardId', id);
    localStorage.setItem('boardDescription', description);
  }
}
