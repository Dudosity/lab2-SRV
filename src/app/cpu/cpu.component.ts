import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpu',
  templateUrl: './cpu.component.html',
  styleUrls: ['./cpu.component.css']
})
export class CpuComponent implements OnInit {
  visibility1 = false;
  visibility2 = false;
  visibility3 = false;
  visibility4 = false;
  visibility5 = false;
  visibility6 = false;
  visibility7 = false;
  visibility8 = false;
  visibility9 = false;
  visibility10 = false;
  visibility11 = false;
  visibility12 = false;
  weight = [];
  baseweight = 2.1;
  basedealay = 10;
  dealays = [30, 80, 50, 120, 100, 79, 30, 130, 170, 60, 30, 110, 174];
  paddings = [];
  constructor() { }

  ngOnInit() {
  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
  async row1() {
    /*this.visibility1 = false;
    this.visibility2 = false;
    this.visibility3 = false;
    this.visibility4 = false;
    this.visibility5 = false;
    this.visibility6 = false;
    this.visibility7 = false;
    this.visibility8 = false;
    this.weight = [];
    this.baseweight = 2.1;
    this.basedealay = 10;
    this.dealays = [30, 40, 10, 120, 60, 20, 30, 50, 170];
    this.paddings = [];*/
    this.paddings[1] = 0;
    this.visibility1 = true;
    this.weight[1] = 0;
    while (this.dealays[1] !== 0) {
      this.weight[1] += this.baseweight;
      console.log(this.weight[1]);
      await this.delay(this.basedealay);
      this.dealays[1] -= 1;
    }
    this.row2();
    this.row3();
  }
  async row2() {
    this.paddings[2] = this.weight[1];
    this.visibility2 = true;
    this.weight[2] = 0;
    while (this.dealays[2] !== 0) {
      this.weight[2] += this.baseweight;
      console.log(this.weight[2]);
      await this.delay(this.basedealay);
      this.dealays[2] -= 1;
    }
    this.row5();
    this.row7();
  }
  async row3() {
    this.paddings[3] = this.weight[1];
    this.visibility3 = true;
    this.weight[3] = 0;
    while (this.dealays[3] !== 0) {
      this.weight[3] += this.baseweight;
      console.log(this.weight[3]);
      await this.delay(this.basedealay);
      this.dealays[3] -= 1;
    }
    this.row6();
  }
  async row4() {
    this.paddings[4] = this.weight[1] + this.weight[3] + this.weight[6];
    this.visibility4 = true;
    this.weight[4] = 0;
    while (this.dealays[4] !== 0) {
      this.weight[4] += this.baseweight;
      console.log(this.weight[4]);
      await this.delay(this.basedealay);
      this.dealays[4] -= 1;
    }
    this.row9();

    this.row11();

  }
  async row5() {
    this.paddings[5] = this.weight[2] + this.weight[1];
    this.visibility5 = true;
    this.weight[5] = 0;
    while (this.dealays[5] !== 0) {
      this.weight[5] += this.baseweight;
      console.log(this.weight[5]);
      await this.delay(this.basedealay);
      this.dealays[5] -= 1;
    }
    this.row8();
  }
  async row6() {
    this.paddings[6] = this.weight[1] + this.weight[3];
    this.visibility6 = true;
    this.weight[6] = 0;
    while (this.dealays[6] !== 0) {
      this.weight[6] += this.baseweight;
      console.log(this.weight[6]);
      await this.delay(this.basedealay);
      this.dealays[6] -= 1;
    }
    this.row4();
  }
  async row7() {
    this.paddings[7] = this.weight[2] + this.weight[1];
    this.visibility7 = true;
    this.weight[7] = 0;
    while (this.dealays[7] !== 0) {
      this.weight[7] += this.baseweight;
      console.log(this.weight[7]);
      await this.delay(this.basedealay);
      this.dealays[7] -= 1;
    }
    this.row10();
    this.row12();
  }
  async row8() {
    this.paddings[8] = this.weight[2] + this.weight[1] + this.weight[5];
    this.visibility8 = true;
    this.weight[8] = 0;
    while (this.dealays[8] !== 0) {
      this.weight[8] += this.baseweight;
      console.log(this.weight[8]);
      await this.delay(this.basedealay);
      this.dealays[8] -= 1;
    }
  }
  async row9() {
    this.paddings[9] = this.weight[1] + this.weight[3] + this.weight[6] + this.weight[4];
    this.visibility8 = true;
    this.weight[9] = 0;
    while (this.dealays[9] !== 0) {
      this.weight[9] += this.baseweight;
      console.log(this.weight[9]);
      await this.delay(this.basedealay);
      this.dealays[9] -= 1;
    }
  }
  async row10() {
    this.paddings[10] = this.weight[2] + this.weight[1] + this.weight[7];
    this.visibility8 = true;
    this.weight[10] = 0;
    while (this.dealays[10] !== 0) {
      this.weight[10] += this.baseweight;
      console.log(this.weight[10]);
      await this.delay(this.basedealay);
      this.dealays[10] -= 1;
    }
  }
  async row11() {
    this.paddings[11] = this.weight[1] + this.weight[3] + this.weight[6] + this.weight[4];
    this.visibility8 = true;
    this.weight[11] = 0;
    while (this.dealays[11] !== 0) {
      this.weight[11] += this.baseweight;
      console.log(this.weight[8]);
      await this.delay(this.basedealay);
      this.dealays[11] -= 1;
    }
  }
  async row12() {
    this.paddings[12] = this.weight[2] + this.weight[1] + this.weight[7];
    this.visibility8 = true;
    this.weight[12] = 0;
    while (this.dealays[12] !== 0) {
      this.weight[12] += this.baseweight;
      console.log(this.weight[8]);
      await this.delay(this.basedealay);
      this.dealays[12] -= 1;
    }
  }
}
