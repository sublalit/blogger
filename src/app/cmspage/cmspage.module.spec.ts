import { CmspageModule } from './cmspage.module';

describe('CmspageModule', () => {
  let cmspageModule: CmspageModule;

  beforeEach(() => {
    cmspageModule = new CmspageModule();
  });

  it('should create an instance', () => {
    expect(cmspageModule).toBeTruthy();
  });
});
