import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teamapp';
  newMember: string = "";
  members: string[] = [];
  errorMessage: string = "";
  numbersOfTeam: number | string = "";
  teams: string[][] = [[]];



  addMember() {
    if (!this.newMember) {
      this.errorMessage = "Enter your name to continue"
      return
    }
    this.errorMessage = "";
    this.members.push(this.newMember);
    console.log(this.members);
    this.newMember = ""
  }
  onInput(value: string) {
    this.newMember = value;
  }
  onNumberOfTeams(value: string) {
    this.numbersOfTeam = Number(value)
  }
  generateTeams() {
    if (!this.numbersOfTeam || this.numbersOfTeam <= 0) return;
    const allMembers = [...this.members];
    for (let i = 0; i < this.numbersOfTeam; i++) {
      const randomIndex = Math.floor(Math.random() * allMembers.length);
      // console.log(randomIndex);
      const member = allMembers.splice(randomIndex, 1)[0];
      if (this.teams[i]) {

      }
    }
  }
}
