import { Injectable } from '@angular/core'
import { GiftCard, GiftCardValues } from '@gift-cards/interfaces/gitf-card.interface'
import { BehaviorSubject, delay, map, Observable, of } from 'rxjs'
import { DateUtils } from 'src/app/utils/date-utils'

@Injectable({
  providedIn: 'root'
})
export class GiftCardService {
  private giftCards: GiftCard[] = [
    {
      id: 1,
      numeroTarjeta: '1234567890123456',
      montoInicial: 100000,
      movimientos: [
        { tipoMovimiento: 'cargaInicial', monto: 100000, fecha: '2025-02-01 09:00:20' },
        { tipoMovimiento: 'carga', monto: 10000, fecha: '2025-02-02 10:10:18' },
        { tipoMovimiento: 'carga', monto: 20000, fecha: '2025-02-05 12:00:06' },
        { tipoMovimiento: 'compra', monto: 50000, fecha: '2025-02-12 16:41:34' }
      ]
    },
    {
      id: 2,
      numeroTarjeta: '9876543210987654',
      montoInicial: 200000,
      movimientos: [
        { tipoMovimiento: 'cargaInicial', monto: 200000, fecha: '2025-01-14 11:41:30' },
        { tipoMovimiento: 'compra', monto: 70000, fecha: '2025-01-26 14:44:32' },
        { tipoMovimiento: 'carga', monto: 10000, fecha: '2025-01-30 08:37:58' },
        { tipoMovimiento: 'compra', monto: 130000, fecha: '2025-02-01 09:01:00' }
      ]
    }
  ]

  private giftCardSubject = new BehaviorSubject<GiftCard[]>(this.giftCards)

  getGiftCards(): Observable<GiftCard[]> {
    const simulatedResponse = {
      ok: true,
      status: 200,
      giftcard: this.giftCards
    }

    return of(simulatedResponse).pipe(
      delay(500),
      map(response => {
        if (response.ok) {
          this.giftCards = response.giftcard
          this.giftCardSubject.next([...this.giftCards])
        }
        return this.giftCards
      })
    )
  }

  addGiftCard(newGiftCard: GiftCard): void {
    const simulatedResponse = {
      ok: true,
      status: 200,
      giftcard: newGiftCard
    }

    of(simulatedResponse).pipe(
      delay(500),
      map(response => {
        if (response.ok) {
          this.giftCards.push(response.giftcard)
          this.giftCardSubject.next([...this.giftCards])
        }
      })
    ).subscribe()
  }

  addGiftCards(newGiftCards: GiftCardValues[]): void {
    const simulatedResponse = {
      ok: true,
      status: 200,
      giftcards: newGiftCards
    }

    const cards: GiftCard[] = []
    newGiftCards.forEach((card) => {
      const randomInt = Math.floor(Math.random() * 10000) + 1
      cards.push({
        id: randomInt,
        numeroTarjeta: card.numeroTarjeta,
        montoInicial: card.montoInicial,
        movimientos: [
          {
            fecha: DateUtils.getCurrentDateTime(),
            tipoMovimiento: 'cargaInicial',
            monto: card.montoInicial
          }
        ]
      })
    })


    of(simulatedResponse).pipe(
      delay(500),
      map(response => {
        if (response.ok) {
          this.giftCards = [...this.giftCards, ...cards]
          this.giftCardSubject.next([...this.giftCards])
        }
      })
    ).subscribe()
  }

  updateGiftCard(id: number, tarjetaActualizada: GiftCard): void {
    const simulatedResponse = {
      ok: true,
      status: 200,
      giftcard: tarjetaActualizada
    }

    of(simulatedResponse).pipe(
      delay(500),
      map(response => {
        if (response.ok) {
          const index = this.giftCards.findIndex(t => t.id === id)
          if (index !== -1) {
            this.giftCards[index] = response.giftcard
            this.giftCardSubject.next([...this.giftCards])
          }
        }
      })
    ).subscribe()
  }
}
