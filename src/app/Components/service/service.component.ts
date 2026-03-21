import { AfterViewInit, Component } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';   // <-- Correct import for Angular/TS

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    gsap.from(".custom-card", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".cards",
        start: "top 80%",
      }
    });
  }
}