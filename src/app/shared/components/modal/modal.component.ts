import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent {
  title = input.required<string>()

  modalClosed = output<boolean>()

  closeModal() {
    this.modalClosed.emit(true)
  }
}
