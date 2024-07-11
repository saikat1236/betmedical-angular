import { Component } from '@angular/core';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})

export class Content {
  showAll = false;

  visibleItems = [
    {
      imgSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7786565e71b1f7d283e84ee17661e4b9b90a11aa3c4af772368c20693f0e099f?apiKey=e4359e71dc7544f59d6c1a8f2e8a7240&',
      imgAlt: 'Medical Portfolio 1',
      title: 'Mobile Imaging System',
      description: '2D & 3D Imaging Solutions from Ziehm Imaging, Germany; 50 years of continuous innovation',
      url: 'https://betmedical.com/category/mobile-imaging-c-arms'
    },
    {
      imgSrc: '../../../assets/Rectangle 5333.png',
      imgAlt: 'Medical Portfolio 2',
      title: 'Mini C-Arm',
      description: 'State-Of-The-Art Innovative Solutions For Orthopedic Imaging from OrthoscanInc, USA; Global Leader In Mini C-Arm Imaging',
      url: 'https://betmedical.com/category/mini-c-arm'
    },
    {
      imgSrc: '../../../assets/Rectangle 5333 2.png',
      imgAlt: 'Medical Portfolio 3',
      title: 'Imaging Tables',
      description: 'Full Carbon Fibre Table Compatible with 3d & 2d C-Arm for Vascular catheterization and Orthopedic Navigation surgeries from Hotborn Medical Equipment Co., Ltd., China',
      url: 'https://betmedical.com/category/imaging-tables'
    },
    {
      imgSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e977e2199634e6789b420a7ac5ec413244a9b8bb5af3e246b4db47f7b202698e?apiKey=e4359e71dc7544f59d6c1a8f2e8a7240&',

      imgAlt: 'Medical Portfolio 4',
      title: 'Surgical Or Tables',
      description: 'High Quality, Reliable, Radiolucent and Innovative Surgical OR Tables From Benq Medical Technology',
      url: 'https://betmedical.com/category/surgical-or-tables'
    },
    {
      imgSrc: '../../../assets/Rectangle 5317.png',
      imgAlt: 'Medical Portfolio 5',
      title: 'Surgical LED or Lights',
      description: 'High Efficiency, Superior Optical Performance Surgical LED OR Lights From BenQ Medical Technology Corporation, Taiwan',
      url: 'https://betmedical.com/category/surgical-led-or-lights'
      
    },
    {
      imgSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a858fcf475dbdc1428fc3934ecd479b37502c63905f599eee80b9f06023cc80c?apiKey=e4359e71dc7544f59d6c1a8f2e8a7240&',
      imgAlt: 'Medical Portfolio 6',
      title: 'Spine Tables',
      description: 'Smooth and Flexible Carbon Fibre Spine attachment for surgical Table from ISO Medical Systems Inc, Japan',
      url: 'https://betmedical.com/category/spine-tables'
    },




    {
      imgSrc: '../../../assets/Rectangle 5317 2.png',
      imgAlt: 'Medical Portfolio 7',
      title: 'Criticalcare Ventilators',
      description: 'A state-of-the-art piston-type HFO ventilator that brings together over 30 years’ worth of technological achievements MetranCo.,Ltd, Japan',
      url: 'https://betmedical.com/category/criticalcare-ventilators'
    },
    {
      imgSrc: '../../../assets/Rectangle 5333 (2).png',
      imgAlt: 'Medical Portfolio 8',
      title: 'Breast Imaging',
      description: 'State of the art solutions for screening and breast tomosynthesis, High-performance mammography systems with proven reliability from Metaltronica, Italy.',
      url: 'https://betmedical.com/category/breast-imaging'
    },
    {
      imgSrc: '../../../assets/Rectangle 5333 (3).png',
      imgAlt: 'Medical Portfolio 9',
      title: 'Digital Radiography',
      description: 'Standard and Mobile digital X-ray system with high durability and Reliability from SITEC Medical Co.,Ltd., Korea',
      url: 'https://betmedical.com/category/digital-radiography'
    },
    {
      imgSrc: '../../../assets/Rectangle 5333 2.png',
      imgAlt: 'Medical Portfolio 10',
      title: 'Cardiovascular Fusion imaging & Navigation',
      description: 'Advanced And User-Friendly AI Imaging Software for Endovascular Case Planning To Intra-Operative Navigation from Therenva, France',
      url: 'https://betmedical.com/category/cardiovascular-fusion-imaging-navigation'
    }
  ];

  toggleShow() {
    this.showAll = !this.showAll;
  }
}
