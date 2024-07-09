import { Component } from '@angular/core';

@Component({
  selector: 'app-image-with-tooltip',
  templateUrl: './image-with-tooltip.component.html',
  styleUrls: ['./image-with-tooltip.component.scss']
})
export class ImageWithTooltipComponent {
  tooltip = {
    visible: true,
    x: 100,
    y: 100,
    text: 'Hello'
  };

  locations = [
    { x: 100, y: 100, text: 'Location 1' },
    { x: 200, y: 150, text: 'Location 2' },
    // Add more locations as needed
  ];

  onMouseMove(event: MouseEvent) {
    const imageElement = (event.target as HTMLElement).closest('.image-container');
    if (!imageElement) return;

    const rect = imageElement.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;

    const location = this.locations.find(loc => 
      Math.abs(loc.x - offsetX) < 10 && Math.abs(loc.y - offsetY) < 10
    );

    if (location) {
      this.tooltip.visible = true;
      this.tooltip.x = offsetX;
      this.tooltip.y = offsetY;
      this.tooltip.text = location.text;
    } else {
      this.tooltip.visible = false;
    }
  }

  onMouseLeave() {
    this.tooltip.visible = false;
  }
}
