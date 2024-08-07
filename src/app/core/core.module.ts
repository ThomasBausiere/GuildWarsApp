import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { CharacterService } from './services/character.service';
import { SkillService } from './services/skill.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    UserService,
    CharacterService,
    SkillService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
