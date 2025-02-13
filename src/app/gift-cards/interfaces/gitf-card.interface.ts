export interface GiftCard {
  id: number
  montoInicial: number
  movimientos: Transaction[]
  numeroTarjeta: string
}

export interface Transaction {
  fecha: string
  monto: number
  tipoMovimiento: string
}

export interface GiftCardValues {
  montoInicial: number
  numeroTarjeta: string
}
