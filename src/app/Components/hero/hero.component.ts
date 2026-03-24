import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#heroImage", {
      y: 50,               // 🔹 scroll ke saath vertical movement
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",  // 🔹 hero section trigger
        start: "top top",
        end: "bottom top",
        scrub: true,       // 🔹 smooth scroll sync
        // markers: true   // 🔹 debug ke liye on karo
      }
    });
  }
}