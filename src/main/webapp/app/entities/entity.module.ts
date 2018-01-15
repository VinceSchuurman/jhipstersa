import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipstersaRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { JhipstersaCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { JhipstersaLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { JhipstersaDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { JhipstersaTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { JhipstersaEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { JhipstersaJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { JhipstersaJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JhipstersaRegionMySuffixModule,
        JhipstersaCountryMySuffixModule,
        JhipstersaLocationMySuffixModule,
        JhipstersaDepartmentMySuffixModule,
        JhipstersaTaskMySuffixModule,
        JhipstersaEmployeeMySuffixModule,
        JhipstersaJobMySuffixModule,
        JhipstersaJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipstersaEntityModule {}
