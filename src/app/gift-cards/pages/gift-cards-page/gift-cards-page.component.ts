import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core'
import { GiftCard } from '@gift-cards/interfaces/gitf-card.interface'
import { GiftCardService } from '@gift-cards/services/gift-card.service'
import { ModalComponent } from '@shared/components/modal/modal.component'

@Component({
  selector: 'app-gift-cards-page',
  imports: [ModalComponent],
  templateUrl: './gift-cards-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GiftCardsPageComponent implements OnInit{
  giftCards = signal<GiftCard[]>([])
  selectedGiftCard = signal<GiftCard | null>(null)
  isModalOpen = signal<boolean>(false)

  private giftCardService = inject(GiftCardService)

  ngOnInit() {
    this.giftCardService.getGiftCards().subscribe({
      next: (data) => {
        this.giftCards.set(data)
      },
      error: (err) => {
        console.error('Error al obtener las Gift Cards:', err)
      },
      complete: () => {
        console.log('Operación completada: Obtención de Gift Cards')
      }
    })
  }

  detailCard(giftCard: GiftCard) {
    console.log('KLK')
    console.log(giftCard)
    this.selectedGiftCard.set(giftCard)
    this.isModalOpen.set(true)
  }

  closeModal() {
    this.isModalOpen.set(false)
  }

  // updateGiftCard(id: string, tarjetaActualizada: GiftCard): void {
  //   this.giftCardService.updateGiftCard(id, tarjetaActualizada)
  //   this.giftCardService.getGiftCards().subscribe({
  //     next: (data) => {
  //       this.giftCards.set(data)
  //     },
  //     error: (err) => {
  //       console.error('Error al actualizar Gift Card:', err)
  //     },
  //     complete: () => {
  //       console.log('Operación completada: Actualización de Gift Card')
  //     }
  //   })
  // }
}
