import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("Connected")
  }
  change(event) {
    event.currentTarget.innerText = "Paulyn Ompico"
  }
  return(event) {
    event.currentTarget.innerText = "Potato"
  }
}
