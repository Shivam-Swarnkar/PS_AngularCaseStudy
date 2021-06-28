import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TimerModel } from '../../shared/timer.model';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  timerLimitFinal = null;
  pauseTime!: boolean;
  currentTime!: number;
  timerCurrentStatus = {
    currentState: TimerModel.notStartedState,
    currentTime: null,
  };
  resetCompleterTime!: boolean;

  currentTimer!: any;
  timerInterval: any;

  startPauseCount = {
    started: 0,
    paused: 0,
  };

  pausedTimeCollection: any = [];
  dateAndTimeOccurance: any = [];
  constructor() {}

  ngOnInit(): void {}

  getTimer(timeLimit: any) {
    this.timerLimitFinal = timeLimit;
    if (this.timerCurrentStatus.currentState == TimerModel.pausedState) {
      this.startTimer(this.timerCurrentStatus.currentTime);
    } else if (
      this.timerCurrentStatus.currentState == TimerModel.notStartedState &&
      this.timerLimitFinal
    ) {
      this.resetEverything();
      this.startTimer(this.timerLimitFinal);
    }
  }

  startTimer(startTime: any) {
    clearInterval(this.timerInterval);
    this.setCurrentStatus(TimerModel.startedState, this.currentTimer);
    this.setDateAndTimeOccurance(TimerModel.startedState);
    this.countChange(true);
    this.currentTimer = startTime;
    this.timerInterval = setInterval(() => {
      if (this.currentTimer <= 0) {
        clearInterval(this.timerInterval);
        this.setCurrentStatus(TimerModel.notStartedState, this.currentTimer);
      } else {
        this.currentTimer -= 1;
      }
    }, 1000);
  }

  pauseTimer(pauseTime: any) {
    this.pauseTime = pauseTime;
    clearInterval(this.timerInterval);
    if (this.timerCurrentStatus.currentState == TimerModel.startedState) {
      this.collectPausedTime();
      this.setDateAndTimeOccurance(TimerModel.pausedState);
      this.countChange(false);
      this.setCurrentStatus(TimerModel.pausedState, this.currentTimer);
    }
  }

  resetTimer(resetCompleterTime: boolean) {
    this.resetCompleterTime = resetCompleterTime;
    clearInterval(this.timerInterval);
    this.currentTimer = null;
    this.resetCompleterTime = false;
    this.resetEverything();
    this.setCurrentStatus(TimerModel.notStartedState, this.currentTimer);
  }

  setCurrentStatus(status: any, timer: any) {
    this.timerCurrentStatus.currentState = status;
    this.timerCurrentStatus.currentTime = timer;
  }

  countChange(started: boolean) {
    if (started) this.startPauseCount.started += 1;
    else this.startPauseCount.paused += 1;
  }

  collectPausedTime() {
    this.pausedTimeCollection.push(this.currentTimer);
  }

  setDateAndTimeOccurance(state: any) {
    const stateNow = state;
    const d = new Date();
    const date = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    let hour = d.getHours();
    const ampm = hour >= 12 ? 'pm' : 'am';
    hour = hour % 12;
    hour = hour ? hour : 12;
    let minute = d.getMinutes();
    const second = d.getSeconds();
    const dateNow = `${date}-${month}-${year} ${hour}:${minute}:${second} ${ampm}`;
    this.dateAndTimeOccurance.push({ stateNow, dateNow });
  }
  resetEverything() {
    this.pausedTimeCollection.length = 0;
    this.dateAndTimeOccurance.length = 0;
    this.startPauseCount.started = 0;
    this.startPauseCount.paused = 0;
  }
}
