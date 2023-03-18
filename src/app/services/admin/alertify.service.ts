import { Injectable } from '@angular/core';
declare var alertify:any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }
  message(message: string,options:AlertifyOptions) {
    alertify.set('notifier','delay',options.delay);
    alertify.set('notifier','position',options.position);
    const msj= alertify[options.messageType](message);
    if(options.dismissOthers) 
    msj.dismissOthers();
}

dismiss(){
   alertify.dismissAll();
}
}
export class AlertifyOptions{
  messageType:MessageType=MessageType.message;
  position:Position=Position.BottomRight;
  delay:number=3;
  dismissOthers:boolean=false;
}

export enum MessageType{
  success="success",
  info="info",
  warning="warning",
  error="error",
  notify="notify",
  message="message"
}

export enum Position{
  TopCenter="top-center",
  TopRight="top-right",
  TopLeft="top-left",
  BottomLeft="bottom-left",
  BottomCenter="bottom-center",
  BottomRight="bottom-right"
  
}