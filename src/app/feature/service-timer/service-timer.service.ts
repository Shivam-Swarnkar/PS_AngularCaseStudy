import { Subject } from 'rxjs';
import { TimerModel } from '../../shared/timer.model';

export class ServiceTimerService {
  timerLimitFinal = null;
  pauseTime!: boolean;
  currentTime: any;
  timerCurrentStatus = {
    currentState: TimerModel.notStartedState,
    currentTime: null,
  };
  resetCompleterTime!: boolean;

  currentTimer = new Subject<number>();
  dateAndTimeStamp = new Subject<any>();
  actionCount = new Subject<any>();
  timerInterval: any;

  startPauseCount = {
    started: 0,
    paused: 0,
  };

  pausedTimeCollection: any = [];
  dateAndTimeOccurance: any = [];
  constructor() {}

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
    this.setCurrentStatus(TimerModel.startedState, this.currentTime);
    this.setDateAndTimeOccurance(TimerModel.startedState);
    this.countChange(true);
    this.currentTime = startTime;
    this.currentTimer.next(this.currentTime);
    this.timerInterval = setInterval(() => {
      if (this.currentTime <= 0) {
        clearInterval(this.timerInterval);
        this.setCurrentStatus(TimerModel.notStartedState, this.currentTime);
      } else {
        this.currentTime -= 1;
        this.currentTimer.next(this.currentTime);
      }
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.timerInterval);
    if (this.timerCurrentStatus.currentState == TimerModel.startedState) {
      this.collectPausedTime();
      this.setDateAndTimeOccurance(TimerModel.pausedState);
      this.countChange(false);
      this.setCurrentStatus(TimerModel.pausedState, this.currentTime);
    }
  }

  resetTimer() {
    clearInterval(this.timerInterval);
    this.currentTime = null;
    this.currentTimer.next(this.currentTime);
    this.resetCompleterTime = false;
    this.resetEverything();
    this.setCurrentStatus(TimerModel.notStartedState, this.currentTime);
  }

  setCurrentStatus(status: any, timer: any) {
    this.timerCurrentStatus.currentState = status;
    this.timerCurrentStatus.currentTime = timer;
  }

  countChange(started: boolean) {
    if (started) this.startPauseCount.started += 1;
    else this.startPauseCount.paused += 1;
    this.actionCount.next(this.startPauseCount);
  }

  collectPausedTime() {
    this.pausedTimeCollection.push(this.currentTime);
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
    this.dateAndTimeStamp.next(this.dateAndTimeOccurance);
  }
  resetEverything() {
    this.pausedTimeCollection.length = TimerModel.resetState;
    this.dateAndTimeOccurance.length = TimerModel.resetState;
    this.startPauseCount.started = TimerModel.resetState;
    this.startPauseCount.paused = TimerModel.resetState;
  }
}
