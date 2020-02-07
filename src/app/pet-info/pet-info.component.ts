import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-info',
  templateUrl: './pet-info.component.html',
  styleUrls: ['./pet-info.component.css']
})
export class PetInfoComponent implements OnInit {

  name = 'Nemo';
  image = 'https://images.theconversation.com/files/296905/original/file-20191014-135529-xgmui3.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip';

  onNameChange(value) {
    this.name = value;
  }

  onImageChange(value) {
    this.image = value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
