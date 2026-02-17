import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { LugoStateService } from '@states/lugo-state/lugo-state.service';
import { Observable } from 'rxjs';
import { firstValueFrom } from 'rxjs';

export enum ParameterNode {
  CATEGORIES = 'PARAM_CATEGORIES_NODE',
  BRANDS = 'PARAM_BRANDS_NODE',
}

export enum LugoStateKey {
  PARAMETERS = 'PARAMETERS',
}

@Injectable({
  providedIn: 'root',
})
export class ParameterService {
  private apiUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  getAllParameters(): Observable<any> {
    const direction = `${this.apiUrl}/parameter/getAllParameters`;

    return this.http.get(direction);
  }
}

export function initParameters(
  parametersService: ParameterService,
  state: LugoStateService,
) {
  return async () => {
    try {
      const response = await firstValueFrom(
        parametersService.getAllParameters(),
      );

      Object.entries(response.data).forEach(([key, value]) => {
        state.set(key, value);
      });
    } catch {
      state.set(ParameterNode.CATEGORIES, []);
      state.set(ParameterNode.BRANDS, []);
    }
  };
}
