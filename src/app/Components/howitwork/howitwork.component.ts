import { AfterViewInit, Component } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-howitwork',
  templateUrl: './howitwork.component.html',
  styleUrls: ['./howitwork.component.css']
})
export class HowitworkComponent implements AfterViewInit {

  ngAfterViewInit(): void {

    // Animate Only the Image, proper repeat on scroll up/down
    gsap.set(".reveal-right", { opacity: 0, x: 100 }); // ensure initial state

    ScrollTrigger.create({
      trigger: ".reveal-right",
      start: "top 80%",
      end: "bottom top",
      onEnter: () => gsap.to(".reveal-right", { opacity: 1, x: 0, duration: 1, ease: "power2.out" }),
      onEnterBack: () => gsap.to(".reveal-right", { opacity: 1, x: 0, duration: 1, ease: "power2.out" }),
      onLeave: () => gsap.set(".reveal-right", { opacity: 0, x: 100 }),  // reset for scroll back
      onLeaveBack: () => gsap.set(".reveal-right", { opacity: 0, x: 100 }),
    });

  }

}