import { ParameterNode } from '@enums/parameters.enum';
import { LugoStateService } from '@states/lugo-state/lugo-state.service';
import { ParameterService } from '@states/parameters/parameter.service';
import { firstValueFrom } from 'rxjs';

export function initParameters(
  parametersService: ParameterService,
  state: LugoStateService,
) {
  return async () => {
    try {
      const response = await firstValueFrom(
        parametersService.getAllParameters(),
      );

      console.log({
        response,
      });
      Object.entries(response).forEach(([key, value]) => {
        state.set(key, value);
      });
    } catch {
      state.set(ParameterNode.CATEGORIES, []);
      state.set(ParameterNode.BRANDS, []);
    }
  };
}
