/*
 * Copyright 2023 Comcast Cable Communications Management, LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import symbols from '../../lib/symbols.js'

export default (component, data) => {
  let routes = data
  if (Array.isArray(data) === false) {
    component[symbols.routerHooks] = data.hooks
    routes = data.routes
  }
  component[symbols.routes] = []

  const l = routes.length
  for (let i = 0; i < l; i++) {
    component[symbols.routes][i] = routes[i]
    // merge default route options with route specific options
    component[symbols.routes][i].options = {
      ...{
        inHistory: true,
      },
      ...routes[i].options,
    }
  }
}
