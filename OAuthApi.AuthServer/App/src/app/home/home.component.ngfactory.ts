/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './home.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/debug_context';
import * as import3 from '@angular/core/src/render/api';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/router/src/router';
import * as import10 from '../../core/alert/alert.service';
import * as import11 from '../../core/auth-token/auth-token.service';
import * as import12 from '@ngrx/store/src/store';
import * as import13 from '../../core/auth-http/auth-http.service';
import * as import14 from '../../core/storage';
import * as import15 from '@angular/material/button/button';
import * as import16 from '../../shared/file-upload/file-upload.component';
import * as import17 from '@angular/core/src/linker/template_ref';
import * as import18 from '@angular/common/src/directives/ng_for';
import * as import19 from '../../../node_modules/@angular/material/button/button.ngfactory';
import * as import20 from '../../shared/file-upload/file-upload.component.ngfactory';
import * as import21 from '@angular/core/src/linker/view_container';
import * as import22 from '../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import23 from '@angular/common/src/pipes/async_pipe';
import * as import24 from '@angular/core/src/linker/element_ref';
import * as import25 from '@angular/http/src/http';
import * as import26 from '@angular/core/src/change_detection/differs/iterable_differs';
export class Wrapper_HomeComponent {
  /*private*/ _eventHandler:Function;
  context:import0.HomeComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any,p2:any,p3:any,p4:any,p5:any) {
    this._changed = false;
    this.context = new import0.HomeComponent(p0,p1,p2,p3,p4,p5);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
const nodeDebugInfos_HomeComponent_Host0:import2.StaticNodeDebugInfo[] = [new import2.StaticNodeDebugInfo([import0.HomeComponent],import0.HomeComponent,{})];
var renderType_HomeComponent_Host:import3.RenderComponentType = import4.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_HomeComponent_Host0 extends import1.DebugAppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.HomeComponent>;
  _HomeComponent_0_3:Wrapper_HomeComponent;
  constructor(viewUtils:import4.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_HomeComponent_Host0,renderType_HomeComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_HomeComponent_Host0);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer,'home',import4.EMPTY_INLINE_ARRAY,rootSelector,this.debug(0,0,0));
    this.compView_0 = new View_HomeComponent0(this.viewUtils,this,0,this._el_0);
    this._HomeComponent_0_3 = new Wrapper_HomeComponent(this.injectorGet(import9.Router,this.parentIndex),this.injectorGet(import10.AlertService,this.parentIndex),this.injectorGet(import11.AuthTokenService,this.parentIndex),this.injectorGet(import12.Store,this.parentIndex),this.injectorGet(import13.AuthHttp,this.parentIndex),this.injectorGet(import14.Storage,this.parentIndex));
    this.compView_0.create(this._HomeComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._HomeComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.HomeComponent) && (0 === requestNodeIndex))) { return this._HomeComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    this._HomeComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const HomeComponentNgFactory:import8.ComponentFactory<import0.HomeComponent> = new import8.ComponentFactory<import0.HomeComponent>('home',View_HomeComponent_Host0,import0.HomeComponent);
const styles_HomeComponent:any[] = ([] as any[]);
const nodeDebugInfos_HomeComponent0:import2.StaticNodeDebugInfo[] = [
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import15.MdButton],import15.MdButton,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import15.MdButton],import15.MdButton,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import16.FileUploadComponent],import16.FileUploadComponent,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([
    import17.TemplateRef,
    import18.NgFor
  ]
  ,(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import15.MdButton],import15.MdButton,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import15.MdButton],import15.MdButton,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import15.MdButton],import15.MdButton,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import15.MdButton],import15.MdButton,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([
    import17.TemplateRef,
    import18.NgFor
  ]
  ,(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
var renderType_HomeComponent:import3.RenderComponentType = import4.createRenderComponentType('C:/Users/Fabian/OneDrive/AngularStarter/OAuthApi.AuthServer/App/src/app/home/home.component.html',0,import5.ViewEncapsulation.None,styles_HomeComponent,{});
export class View_HomeComponent0 extends import1.DebugAppView<import0.HomeComponent> {
  _text_0:any;
  _el_1:any;
  compView_1:import1.AppView<import15.MdButton>;
  _MdButton_1_3:import19.Wrapper_MdButton;
  _text_2:any;
  _text_3:any;
  _el_4:any;
  compView_4:import1.AppView<import15.MdButton>;
  _MdButton_4_3:import19.Wrapper_MdButton;
  _text_5:any;
  _text_6:any;
  _el_7:any;
  compView_7:import1.AppView<import16.FileUploadComponent>;
  _FileUploadComponent_7_3:import20.Wrapper_FileUploadComponent;
  _text_8:any;
  _anchor_9:any;
  /*private*/ _vc_9:import21.ViewContainer;
  _TemplateRef_9_5:any;
  _NgFor_9_6:import22.Wrapper_NgFor;
  _text_10:any;
  _el_11:any;
  compView_11:import1.AppView<import15.MdButton>;
  _MdButton_11_3:import19.Wrapper_MdButton;
  _text_12:any;
  _text_13:any;
  _el_14:any;
  compView_14:import1.AppView<import15.MdButton>;
  _MdButton_14_3:import19.Wrapper_MdButton;
  _text_15:any;
  _text_16:any;
  _el_17:any;
  compView_17:import1.AppView<import15.MdButton>;
  _MdButton_17_3:import19.Wrapper_MdButton;
  _text_18:any;
  _text_19:any;
  _el_20:any;
  compView_20:import1.AppView<import15.MdButton>;
  _MdButton_20_3:import19.Wrapper_MdButton;
  _text_21:any;
  _text_22:any;
  _anchor_23:any;
  /*private*/ _vc_23:import21.ViewContainer;
  _TemplateRef_23_5:any;
  _NgFor_23_6:import22.Wrapper_NgFor;
  _text_24:any;
  /*private*/ _expr_45:any;
  _pipe_async_0:import23.AsyncPipe;
  constructor(viewUtils:import4.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_HomeComponent0,renderType_HomeComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_HomeComponent0);
    this._expr_45 = import7.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n',this.debug(0,0,0));
    this._el_1 = import4.createRenderElement(this.renderer,parentRenderNode,'button',new import4.InlineArray4(4,'color','primary','md-raised-button',''),this.debug(1,1,0));
    this.compView_1 = new import19.View_MdButton0(this.viewUtils,this,1,this._el_1);
    this._MdButton_1_3 = new import19.Wrapper_MdButton(new import24.ElementRef(this._el_1),this.renderer);
    this._text_2 = this.renderer.createText((null as any),'Test to see if you\'re loged in',this.debug(2,1,63));
    this.compView_1.create(this._MdButton_1_3.context);
    this._text_3 = this.renderer.createText(parentRenderNode,'',this.debug(3,1,102));
    this._el_4 = import4.createRenderElement(this.renderer,parentRenderNode,'button',new import4.InlineArray4(4,'color','primary','md-raised-button',''),this.debug(4,3,0));
    this.compView_4 = new import19.View_MdButton0(this.viewUtils,this,4,this._el_4);
    this._MdButton_4_3 = new import19.Wrapper_MdButton(new import24.ElementRef(this._el_4),this.renderer);
    this._text_5 = this.renderer.createText((null as any),'Refresh Tokens',this.debug(5,3,67));
    this.compView_4.create(this._MdButton_4_3.context);
    this._text_6 = this.renderer.createText(parentRenderNode,'\n\n',this.debug(6,3,90));
    this._el_7 = import4.createRenderElement(this.renderer,parentRenderNode,'file-upload',import4.EMPTY_INLINE_ARRAY,this.debug(7,5,0));
    this.compView_7 = new import20.View_FileUploadComponent0(this.viewUtils,this,7,this._el_7);
    this._FileUploadComponent_7_3 = new import20.Wrapper_FileUploadComponent(this.parentView.injectorGet(import25.Http,this.parentIndex),new import24.ElementRef(this._el_7));
    this.compView_7.create(this._FileUploadComponent_7_3.context);
    this._text_8 = this.renderer.createText(parentRenderNode,'\n\n',this.debug(8,5,46));
    this._anchor_9 = this.renderer.createTemplateAnchor(parentRenderNode,this.debug(9,7,0));
    this._vc_9 = new import21.ViewContainer(9,(null as any),this,this._anchor_9);
    this._TemplateRef_9_5 = new import17.TemplateRef_(this,9,this._anchor_9);
    this._NgFor_9_6 = new import22.Wrapper_NgFor(this._vc_9.vcRef,this._TemplateRef_9_5,this.parentView.injectorGet(import26.IterableDiffers,this.parentIndex),this.ref);
    this._text_10 = this.renderer.createText(parentRenderNode,'\n\n',this.debug(10,7,54));
    this._el_11 = import4.createRenderElement(this.renderer,parentRenderNode,'button',new import4.InlineArray4(4,'color','primary','md-raised-button',''),this.debug(11,9,0));
    this.compView_11 = new import19.View_MdButton0(this.viewUtils,this,11,this._el_11);
    this._MdButton_11_3 = new import19.Wrapper_MdButton(new import24.ElementRef(this._el_11),this.renderer);
    this._text_12 = this.renderer.createText((null as any),'testToken',this.debug(12,9,63));
    this.compView_11.create(this._MdButton_11_3.context);
    this._text_13 = this.renderer.createText(parentRenderNode,'\n\n',this.debug(13,9,81));
    this._el_14 = import4.createRenderElement(this.renderer,parentRenderNode,'button',new import4.InlineArray4(4,'color','primary','md-raised-button',''),this.debug(14,11,0));
    this.compView_14 = new import19.View_MdButton0(this.viewUtils,this,14,this._el_14);
    this._MdButton_14_3 = new import19.Wrapper_MdButton(new import24.ElementRef(this._el_14),this.renderer);
    this._text_15 = this.renderer.createText((null as any),'RAISED',this.debug(15,11,41));
    this.compView_14.create(this._MdButton_14_3.context);
    this._text_16 = this.renderer.createText(parentRenderNode,'\n\n\n\n',this.debug(16,11,56));
    this._el_17 = import4.createRenderElement(this.renderer,parentRenderNode,'button',new import4.InlineArray4(4,'color','primary','md-raised-button',''),this.debug(17,15,0));
    this.compView_17 = new import19.View_MdButton0(this.viewUtils,this,17,this._el_17);
    this._MdButton_17_3 = new import19.Wrapper_MdButton(new import24.ElementRef(this._el_17),this.renderer);
    this._text_18 = this.renderer.createText((null as any),'connect',this.debug(18,15,61));
    this.compView_17.create(this._MdButton_17_3.context);
    this._text_19 = this.renderer.createText(parentRenderNode,'\n',this.debug(19,15,77));
    this._el_20 = import4.createRenderElement(this.renderer,parentRenderNode,'button',new import4.InlineArray4(4,'color','primary','md-raised-button',''),this.debug(20,16,0));
    this.compView_20 = new import19.View_MdButton0(this.viewUtils,this,20,this._el_20);
    this._MdButton_20_3 = new import19.Wrapper_MdButton(new import24.ElementRef(this._el_20),this.renderer);
    this._text_21 = this.renderer.createText((null as any),'send',this.debug(21,16,58));
    this.compView_20.create(this._MdButton_20_3.context);
    this._text_22 = this.renderer.createText(parentRenderNode,'\n\n',this.debug(22,16,71));
    this._anchor_23 = this.renderer.createTemplateAnchor(parentRenderNode,this.debug(23,18,0));
    this._vc_23 = new import21.ViewContainer(23,(null as any),this,this._anchor_23);
    this._TemplateRef_23_5 = new import17.TemplateRef_(this,23,this._anchor_23);
    this._NgFor_23_6 = new import22.Wrapper_NgFor(this._vc_23.vcRef,this._TemplateRef_23_5,this.parentView.injectorGet(import26.IterableDiffers,this.parentIndex),this.ref);
    this._text_24 = this.renderer.createText(parentRenderNode,'\n',this.debug(24,20,6));
    var disposable_0:Function = import4.subscribeToRenderElement(this,this._el_1,new import4.InlineArray8(8,'click',(null as any),'mousedown',(null as any),'focus',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_1));
    var disposable_1:Function = import4.subscribeToRenderElement(this,this._el_4,new import4.InlineArray8(8,'click',(null as any),'mousedown',(null as any),'focus',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_4));
    this.debug((null as any),(null as any),(null as any));
    this._pipe_async_0 = new import23.AsyncPipe(this.ref);
    var disposable_2:Function = import4.subscribeToRenderElement(this,this._el_11,new import4.InlineArray8(8,'click',(null as any),'mousedown',(null as any),'focus',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_11));
    var disposable_3:Function = import4.subscribeToRenderElement(this,this._el_14,new import4.InlineArray8(6,'mousedown',(null as any),'focus',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_14));
    var disposable_4:Function = import4.subscribeToRenderElement(this,this._el_17,new import4.InlineArray8(8,'click',(null as any),'mousedown',(null as any),'focus',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_17));
    var disposable_5:Function = import4.subscribeToRenderElement(this,this._el_20,new import4.InlineArray8(8,'click',(null as any),'mousedown',(null as any),'focus',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_20));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._anchor_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._text_16,
      this._el_17,
      this._text_18,
      this._text_19,
      this._el_20,
      this._text_21,
      this._text_22,
      this._anchor_23,
      this._text_24
    ]
    ),[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3,
      disposable_4,
      disposable_5
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.MdButton) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 2)))) { return this._MdButton_1_3.context; }
    if (((token === import15.MdButton) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._MdButton_4_3.context; }
    if (((token === import16.FileUploadComponent) && (7 === requestNodeIndex))) { return this._FileUploadComponent_7_3.context; }
    if (((token === import17.TemplateRef) && (9 === requestNodeIndex))) { return this._TemplateRef_9_5; }
    if (((token === import18.NgFor) && (9 === requestNodeIndex))) { return this._NgFor_9_6.context; }
    if (((token === import15.MdButton) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 12)))) { return this._MdButton_11_3.context; }
    if (((token === import15.MdButton) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 15)))) { return this._MdButton_14_3.context; }
    if (((token === import15.MdButton) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 18)))) { return this._MdButton_17_3.context; }
    if (((token === import15.MdButton) && ((20 <= requestNodeIndex) && (requestNodeIndex <= 21)))) { return this._MdButton_20_3.context; }
    if (((token === import17.TemplateRef) && (23 === requestNodeIndex))) { return this._TemplateRef_23_5; }
    if (((token === import18.NgFor) && (23 === requestNodeIndex))) { return this._NgFor_23_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import7.ValueUnwrapper();
    this.debug(1,1,25);
    const currVal_1_0_0:any = 'primary';
    this._MdButton_1_3.check_color(currVal_1_0_0,throwOnChange,false);
    if (this._MdButton_1_3.ngDoCheck(this,this._el_1,throwOnChange)) { this.compView_1.markAsCheckOnce(); }
    this.debug(4,3,25);
    const currVal_4_0_0:any = 'primary';
    this._MdButton_4_3.check_color(currVal_4_0_0,throwOnChange,false);
    if (this._MdButton_4_3.ngDoCheck(this,this._el_4,throwOnChange)) { this.compView_4.markAsCheckOnce(); }
    this.debug(7,5,14);
    const currVal_7_0_0:any = true;
    this._FileUploadComponent_7_3.check_multiple(currVal_7_0_0,throwOnChange,false);
    this._FileUploadComponent_7_3.ngDoCheck(this,this._el_7,throwOnChange);
    this.debug(9,7,5);
    valUnwrapper.reset();
    const currVal_9_0_0:any = valUnwrapper.unwrap(this._pipe_async_0.transform(this.context.test$));
    this._NgFor_9_6.check_ngForOf(currVal_9_0_0,throwOnChange,valUnwrapper.hasWrappedValue);
    this._NgFor_9_6.ngDoCheck(this,this._anchor_9,throwOnChange);
    this.debug(11,9,25);
    const currVal_11_0_0:any = 'primary';
    this._MdButton_11_3.check_color(currVal_11_0_0,throwOnChange,false);
    if (this._MdButton_11_3.ngDoCheck(this,this._el_11,throwOnChange)) { this.compView_11.markAsCheckOnce(); }
    this.debug(14,11,25);
    const currVal_14_0_0:any = 'primary';
    this._MdButton_14_3.check_color(currVal_14_0_0,throwOnChange,false);
    if (this._MdButton_14_3.ngDoCheck(this,this._el_14,throwOnChange)) { this.compView_14.markAsCheckOnce(); }
    this.debug(17,15,25);
    const currVal_17_0_0:any = 'primary';
    this._MdButton_17_3.check_color(currVal_17_0_0,throwOnChange,false);
    if (this._MdButton_17_3.ngDoCheck(this,this._el_17,throwOnChange)) { this.compView_17.markAsCheckOnce(); }
    this.debug(20,16,25);
    const currVal_20_0_0:any = 'primary';
    this._MdButton_20_3.check_color(currVal_20_0_0,throwOnChange,false);
    if (this._MdButton_20_3.ngDoCheck(this,this._el_20,throwOnChange)) { this.compView_20.markAsCheckOnce(); }
    this.debug(23,18,5);
    const currVal_23_0_0:any = this.context.messages;
    this._NgFor_23_6.check_ngForOf(currVal_23_0_0,throwOnChange,false);
    this._NgFor_23_6.ngDoCheck(this,this._anchor_23,throwOnChange);
    this._vc_9.detectChangesInNestedViews(throwOnChange);
    this._vc_23.detectChangesInNestedViews(throwOnChange);
    this._MdButton_1_3.checkHost(this,this.compView_1,this._el_1,throwOnChange);
    this.debug(3,1,102);
    const currVal_45:any = import4.inlineInterpolate(1,'\n',this.context.testResult,'\n');
    if (import4.checkBinding(throwOnChange,this._expr_45,currVal_45)) {
      this.renderer.setText(this._text_3,currVal_45);
      this._expr_45 = currVal_45;
    }
    this._MdButton_4_3.checkHost(this,this.compView_4,this._el_4,throwOnChange);
    this._MdButton_11_3.checkHost(this,this.compView_11,this._el_11,throwOnChange);
    this._MdButton_14_3.checkHost(this,this.compView_14,this._el_14,throwOnChange);
    this._MdButton_17_3.checkHost(this,this.compView_17,this._el_17,throwOnChange);
    this._MdButton_20_3.checkHost(this,this.compView_20,this._el_20,throwOnChange);
    this.compView_1.detectChanges(throwOnChange);
    this.compView_4.detectChanges(throwOnChange);
    this.compView_7.detectChanges(throwOnChange);
    this.compView_11.detectChanges(throwOnChange);
    this.compView_14.detectChanges(throwOnChange);
    this.compView_17.detectChanges(throwOnChange);
    this.compView_20.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_9.destroyNestedViews();
    this._vc_23.destroyNestedViews();
    this.compView_1.destroy();
    this.compView_4.destroy();
    this.compView_7.destroy();
    this.compView_11.destroy();
    this.compView_14.destroy();
    this.compView_17.destroy();
    this.compView_20.destroy();
    this.debug(1,1,0);
    this.debug(4,3,0);
    this.debug(7,5,0);
    this.debug(9,7,0);
    this.debug(11,9,0);
    this.debug(14,11,0);
    this.debug(17,15,0);
    this.debug(20,16,0);
    this.debug(23,18,0);
    this._pipe_async_0.ngOnDestroy();
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 1) && (ngContentIndex == 0))) { cb(this._text_2,ctx); }
    if (((nodeIndex == 4) && (ngContentIndex == 0))) { cb(this._text_5,ctx); }
    if (((nodeIndex == 11) && (ngContentIndex == 0))) { cb(this._text_12,ctx); }
    if (((nodeIndex == 14) && (ngContentIndex == 0))) { cb(this._text_15,ctx); }
    if (((nodeIndex == 17) && (ngContentIndex == 0))) { cb(this._text_18,ctx); }
    if (((nodeIndex == 20) && (ngContentIndex == 0))) { cb(this._text_21,ctx); }
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 9)) { return new View_HomeComponent1(this.viewUtils,this,9,this._anchor_9,this._vc_9); }
    if ((nodeIndex == 23)) { return new View_HomeComponent2(this.viewUtils,this,23,this._anchor_23,this._vc_23); }
    return (null as any);
  }
  handleEvent_1(eventName:string,$event:any):boolean {
    this.debug(1,1,0);
    this.compView_1.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MdButton_1_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.testAuth()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_4(eventName:string,$event:any):boolean {
    this.debug(4,3,0);
    this.compView_4.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MdButton_4_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.refreshTokens()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_11(eventName:string,$event:any):boolean {
    this.debug(11,9,0);
    this.compView_11.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MdButton_11_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.testToken()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_14(eventName:string,$event:any):boolean {
    this.debug(14,11,0);
    this.compView_14.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MdButton_14_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_17(eventName:string,$event:any):boolean {
    this.debug(17,15,0);
    this.compView_17.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MdButton_17_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.connect()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_20(eventName:string,$event:any):boolean {
    this.debug(20,16,0);
    this.compView_20.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MdButton_20_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.echo()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
const nodeDebugInfos_HomeComponent1:import2.StaticNodeDebugInfo[] = [
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
class View_HomeComponent1 extends import1.DebugAppView<any> {
  _el_0:any;
  _text_1:any;
  constructor(viewUtils:import4.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import21.ViewContainer) {
    super(View_HomeComponent1,renderType_HomeComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_HomeComponent1,declaredViewContainer);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import4.createRenderElement(this.renderer,(null as any),'div',import4.EMPTY_INLINE_ARRAY,this.debug(0,7,0));
    this._text_1 = this.renderer.createText(this._el_0,'number',this.debug(1,7,42));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
const nodeDebugInfos_HomeComponent2:import2.StaticNodeDebugInfo[] = [
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
class View_HomeComponent2 extends import1.DebugAppView<any> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import4.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import21.ViewContainer) {
    super(View_HomeComponent2,renderType_HomeComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_HomeComponent2,declaredViewContainer);
    this._expr_2 = import7.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import4.createRenderElement(this.renderer,(null as any),'div',import4.EMPTY_INLINE_ARRAY,this.debug(0,18,0));
    this._text_1 = this.renderer.createText(this._el_0,'',this.debug(1,18,38));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(1,18,38);
    const currVal_2:any = import4.inlineInterpolate(1,'\n    ',this.context.$implicit,'\n');
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setText(this._text_1,currVal_2);
      this._expr_2 = currVal_2;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}