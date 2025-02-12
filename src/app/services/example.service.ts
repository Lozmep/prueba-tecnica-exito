import { effect, Injectable } from '@angular/core'

// const loadFromLocalStorage = (): Character[] => {
//   const characters = localStorage.getItem('characters')

//   return characters ? JSON.parse(characters) : []
// }

@Injectable({providedIn: 'root'})
export class ExampleService {
  // characters = signal<Character[]>([
  //   {name: '', description: ''},
  //   {name: '', description: ''}
  // ]) --- loadFromLocalStorage()

  // saveToLocalStorage = effect(() => {
  //   localStorage.setItem('character', JSON.stringify(this.characters()))
  // })

  // addCharacter(character: CHaracter){
  //   this.characters.update((list) => [...list,character])
  // }

}
