import { Component,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-image-with-tooltip',
  templateUrl: './image-with-tooltip.component.html',
  styleUrls: ['./image-with-tooltip.component.scss']
})

export class ImageWithTooltipComponent implements AfterViewInit {

  ngAfterViewInit() {
    // set the image-map width and height to match the img size
    const imageMap = document.getElementById('image-map');
    const img = imageMap.querySelector('img');
    imageMap.style.width = `${img.width}px`;
    imageMap.style.height = `${img.height}px`;

    //tooltip direction
    let tooltipDirection;

    const pins = document.querySelectorAll('.pin');
    pins.forEach(pin => {
      // set tooltip direction type - up or down
      if (pin.classList.contains('pin-down')) {
        tooltipDirection = 'tooltip-down';
      } else {
        tooltipDirection = 'tooltip-up';
      }

      // append the tooltip
      const tooltipHtml = `
        <div style='left:${pin.getAttribute('data-xpos')}px;top:${pin.getAttribute('data-ypos')}px' class='${tooltipDirection}'>
          <div class='tooltip'>${pin.innerHTML}</div>
        </div>`;
      imageMap.insertAdjacentHTML('beforeend', tooltipHtml);
    });

    // show/hide the tooltip
    const tooltips = document.querySelectorAll('.tooltip-up, .tooltip-down');
    tooltips.forEach(tooltip => {
      tooltip.addEventListener('mouseenter', function () {
        this.querySelector('.tooltip').style.display = 'block';
      });
      tooltip.addEventListener('mouseleave', function () {
        this.querySelector('.tooltip').style.display = 'none';
      });
    });
  }
}
