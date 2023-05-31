import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="name"
export default class extends Controller {
  connect() {
    console.log("Navbar connected")
  }

  change(event) {
    event.currentTarget.innerText = "Paulyn Ompico"
  }
}
