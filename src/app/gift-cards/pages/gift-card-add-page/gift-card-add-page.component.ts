import { NgClass } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { GiftCardValues } from '@gift-cards/interfaces/gitf-card.interface'
import { GiftCardService } from '@gift-cards/services/gift-card.service'
import { FormUtils } from 'src/app/utils/form-utils'

@Component({
  selector: 'app-gift-card-add-page',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './gift-card-add-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GiftCardAddPageComponent {
  giftCards = signal<GiftCardValues[]>([])

  private fb = inject(FormBuilder)
  private giftCardService = inject(GiftCardService)

  formUtils = FormUtils;

  giftCardForm: FormGroup = this.fb.group({
    cardNumber: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
    amount: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]]
  })

  addGiftCard() {
    console.log('add')
    if (this.giftCardForm.invalid) {
      this.giftCardForm.markAllAsTouched()
      return
    }

    const {cardNumber, amount} = this.giftCardForm.getRawValue()
    this.giftCards.update(registeredCards => [...registeredCards, {numeroTarjeta: cardNumber, montoInicial: amount}])
    this.giftCardForm.reset({
      cardNumber: '',
      amount: '',
    })

  }

  registerGiftCards() {
    console.log('register')
    this.giftCardService.addGiftCards(this.giftCards())
    this.giftCards.set([])
  }

  removeCard(cardNumber: string) {
    console.log('remove')
    this.giftCards.update(registeredCards =>
      registeredCards.filter(card => card.numeroTarjeta !== cardNumber)
    )
  }
}
