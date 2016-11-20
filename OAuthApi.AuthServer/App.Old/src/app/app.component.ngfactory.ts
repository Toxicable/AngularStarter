/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './app.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/debug_context';
import * as import3 from '@angular/core/src/render/api';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '../core/auth-token/auth-token.service';
import * as import10 from '@ngrx/store/src/store';
import * as import11 from '../core/alert/alert.service';
import * as import12 from './app.component.scss';
import * as import13 from './deeppurple-amber.css';
import * as import14 from '../shared/loading-bar/loading-bar.component';
import * as import15 from '../shared/alert/alert.component';
import * as import16 from './navigation/navigation.component';
import * as import17 from '@angular/router/src/directives/router_outlet';
import * as import18 from '../shared/loading-bar/loading-bar.component.ngfactory';
import * as import19 from '../shared/alert/alert.component.ngfactory';
import * as import20 from './navigation/navigation.component.ngfactory';
import * as import21 from '@angular/core/src/linker/view_container';
import * as import22 from '../../node_modules/@angular/router/src/directives/router_outlet.ngfactory';
import * as import23 from '../core/profile/profile.service';
import * as import24 from '../core/account/account.service';
import * as import25 from '@angular/router/src/router_outlet_map';
import * as import26 from '@angular/core/src/linker/component_factory_resolver';
export class Wrapper_AppComponent {
  /*private*/ _eventHandler:Function;
  context:import0.AppComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any,p2:any) {
    this._changed = false;
    this.context = new import0.AppComponent(p0,p1,p2);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    this.context.ngOnDestroy();
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
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
const nodeDebugInfos_AppComponent_Host0:import2.StaticNodeDebugInfo[] = [new import2.StaticNodeDebugInfo([import0.AppComponent],import0.AppComponent,{})];
var renderType_AppComponent_Host:import3.RenderComponentType = import4.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_AppComponent_Host0 extends import1.DebugAppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.AppComponent>;
  _AppComponent_0_3:Wrapper_AppComponent;
  constructor(viewUtils:import4.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AppComponent_Host0,renderType_AppComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_AppComponent_Host0);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer,'my-app',import4.EMPTY_INLINE_ARRAY,rootSelector,this.debug(0,0,0));
    this.compView_0 = new View_AppComponent0(this.viewUtils,this,0,this._el_0);
    this._AppComponent_0_3 = new Wrapper_AppComponent(this.injectorGet(import9.AuthTokenService,this.parentIndex),this.injectorGet(import10.Store,this.parentIndex),this.injectorGet(import11.AlertService,this.parentIndex));
    this.compView_0.create(this._AppComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._AppComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.AppComponent) && (0 === requestNodeIndex))) { return this._AppComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    this._AppComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._AppComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const AppComponentNgFactory:import8.ComponentFactory<import0.AppComponent> = new import8.ComponentFactory<import0.AppComponent>('my-app',View_AppComponent_Host0,import0.AppComponent);
const styles_AppComponent:any[] = [
  import12.styles,
  import13.styles
]
;
const nodeDebugInfos_AppComponent0:import2.StaticNodeDebugInfo[] = [
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import14.LoadingBarComponent],import14.LoadingBarComponent,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import15.AlertComponent],import15.AlertComponent,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import16.NavigationComponent],import16.NavigationComponent,{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import17.RouterOutlet],(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
var renderType_AppComponent:import3.RenderComponentType = import4.createRenderComponentType('C:/Users/Fabian/OneDrive/AngularStarter/OAuthApi.AuthServer/App/src/app/app.component.ts class AppComponent - inline template',0,import5.ViewEncapsulation.None,styles_AppComponent,{});
export class View_AppComponent0 extends import1.DebugAppView<import0.AppComponent> {
  _text_0:any;
  _el_1:any;
  compView_1:import1.AppView<import14.LoadingBarComponent>;
  _LoadingBarComponent_1_3:import18.Wrapper_LoadingBarComponent;
  _text_2:any;
  _el_3:any;
  compView_3:import1.AppView<import15.AlertComponent>;
  _AlertComponent_3_3:import19.Wrapper_AlertComponent;
  _text_4:any;
  _el_5:any;
  compView_5:import1.AppView<import16.NavigationComponent>;
  _NavigationComponent_5_3:import20.Wrapper_NavigationComponent;
  _text_6:any;
  _el_7:any;
  /*private*/ _vc_7:import21.ViewContainer;
  _RouterOutlet_7_5:import22.Wrapper_RouterOutlet;
  _text_8:any;
  constructor(viewUtils:import4.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AppComponent0,renderType_AppComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_AppComponent0);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n',this.debug(0,0,0));
    this._el_1 = import4.createRenderElement(this.renderer,parentRenderNode,'loading-bar',import4.EMPTY_INLINE_ARRAY,this.debug(1,1,0));
    this.compView_1 = new import18.View_LoadingBarComponent0(this.viewUtils,this,1,this._el_1);
    this._LoadingBarComponent_1_3 = new import18.Wrapper_LoadingBarComponent(this.parentView.injectorGet(import10.Store,this.parentIndex));
    this.compView_1.create(this._LoadingBarComponent_1_3.context);
    this._text_2 = this.renderer.createText(parentRenderNode,'\n',this.debug(2,1,27));
    this._el_3 = import4.createRenderElement(this.renderer,parentRenderNode,'alert',import4.EMPTY_INLINE_ARRAY,this.debug(3,2,0));
    this.compView_3 = new import19.View_AlertComponent0(this.viewUtils,this,3,this._el_3);
    this._AlertComponent_3_3 = new import19.Wrapper_AlertComponent(this.parentView.injectorGet(import11.AlertService,this.parentIndex),this.parentView.injectorGet(import10.Store,this.parentIndex));
    this.compView_3.create(this._AlertComponent_3_3.context);
    this._text_4 = this.renderer.createText(parentRenderNode,'\n',this.debug(4,2,15));
    this._el_5 = import4.createRenderElement(this.renderer,parentRenderNode,'navigation',import4.EMPTY_INLINE_ARRAY,this.debug(5,3,0));
    this.compView_5 = new import20.View_NavigationComponent0(this.viewUtils,this,5,this._el_5);
    this._NavigationComponent_5_3 = new import20.Wrapper_NavigationComponent(this.parentView.injectorGet(import23.ProfileService,this.parentIndex),this.parentView.injectorGet(import24.AccountService,this.parentIndex),this.parentView.injectorGet(import10.Store,this.parentIndex));
    this.compView_5.create(this._NavigationComponent_5_3.context);
    this._text_6 = this.renderer.createText(parentRenderNode,'\n',this.debug(6,3,25));
    this._el_7 = import4.createRenderElement(this.renderer,parentRenderNode,'router-outlet',import4.EMPTY_INLINE_ARRAY,this.debug(7,4,0));
    this._vc_7 = new import21.ViewContainer(7,(null as any),this,this._el_7);
    this._RouterOutlet_7_5 = new import22.Wrapper_RouterOutlet(this.parentView.injectorGet(import25.RouterOutletMap,this.parentIndex),this._vc_7.vcRef,this.parentView.injectorGet(import26.ComponentFactoryResolver,this.parentIndex),(null as any));
    this._text_8 = this.renderer.createText(parentRenderNode,'\n',this.debug(8,4,31));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._text_8
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.LoadingBarComponent) && (1 === requestNodeIndex))) { return this._LoadingBarComponent_1_3.context; }
    if (((token === import15.AlertComponent) && (3 === requestNodeIndex))) { return this._AlertComponent_3_3.context; }
    if (((token === import16.NavigationComponent) && (5 === requestNodeIndex))) { return this._NavigationComponent_5_3.context; }
    if (((token === import17.RouterOutlet) && (7 === requestNodeIndex))) { return this._RouterOutlet_7_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(1,1,0);
    if (this._LoadingBarComponent_1_3.ngDoCheck(this,this._el_1,throwOnChange)) { this.compView_1.markAsCheckOnce(); }
    this.debug(3,2,0);
    this._AlertComponent_3_3.ngDoCheck(this,this._el_3,throwOnChange);
    this.debug(5,3,0);
    this._NavigationComponent_5_3.ngDoCheck(this,this._el_5,throwOnChange);
    this.debug(7,4,0);
    this._RouterOutlet_7_5.ngDoCheck(this,this._el_7,throwOnChange);
    this._vc_7.detectChangesInNestedViews(throwOnChange);
    this.compView_1.detectChanges(throwOnChange);
    this.compView_3.detectChanges(throwOnChange);
    this.compView_5.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_7.destroyNestedViews();
    this.compView_1.destroy();
    this.compView_3.destroy();
    this.compView_5.destroy();
    this.debug(1,1,0);
    this.debug(3,2,0);
    this.debug(5,3,0);
    this._RouterOutlet_7_5.ngOnDestroy();
  }
}