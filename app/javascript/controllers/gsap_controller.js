import { Controller } from "@hotwired/stimulus"
import { gsap } from "gsap";

// Connects to data-controller="gsap"
export default class extends Controller {
  connect() {
    console.log("Testing")

    gsap.defaults({ease: "none"});

    let bodyEl = document.body;

    let bub = gsap.timeline();

    gsap.to('#bubbles2, #bubbles1',{x:-100, repeat: -1, yoyo: true, duration: 2, ease: "power1.inOut",});

    bub
      .set("#bubbles2, #bubbles1",{
      y: 500,
      opacity: 0.5,
    })
      .to("#bubbles2, #bubbles1", {
      opacity: 0,
      y: -200,
      scale:0.8,
      duration: 15, 
      repeat: -1,
      ease: "power1.inOut",
    });
  }
}
