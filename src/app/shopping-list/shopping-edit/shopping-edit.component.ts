import { Subscription } from 'rxjs'
import { Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model'
import { shoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy{
  @ViewChild('f', { static: false }) slForm: NgForm
 subscription: Subscription
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  

  constructor(private shoppingListService: shoppingListService) { }

  ngOnInit(): void {


    // startedEditing körs så fort vi har skickat in ny data till våran observable via next
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index)
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,

        })
      }
    )

  }

  onAddItem(form: NgForm) {
    const value = form.value
  const newIngredient = new Ingredient(value.name, value.amount)
  if (this.editMode) {
    this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient)
  } else {
    this.shoppingListService.addIngredient(newIngredient)
  }
  this.editMode = false;
  form.reset(); 
  }


  onClear() {
    this.slForm.reset()
    this.editMode = false;
  }

  onDelete() {
    this.onClear()
    this.shoppingListService.deleteIngredient(this.editedItemIndex)
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
