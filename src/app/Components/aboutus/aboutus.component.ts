import { AfterViewInit, Component } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements AfterViewInit {

ngAfterViewInit(): void {
  // Animate Left Image (from right)
  gsap.from(".left-img", {
    x: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".left-img",
      start: "top 80%",
      toggleActions: "restart pause restart pause", // <-- key line
      // "onEnter onLeave onEnterBack onLeaveBack"
    }
  });

  // Animate Horizontal Cards (from bottom)
  gsap.from(".custom-horizontal-card", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".horizontal-cards-wrapper",
      start: "top 80%",
      toggleActions: "restart pause restart pause", // <-- ensures every scroll triggers
    }
  });
}
}