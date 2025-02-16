/*
 *
 *  Licensed to the Apache Software Foundation (ASF) under one or more
 *  contributor license agreements.  See the NOTICE file distributed with
 *  this work for additional information regarding copyright ownership.
 *  The ASF licenses this file to You under the Apache License, Version 2.0
 *  (the "License"); you may not use this file except in compliance with
 *  the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

import { postAll } from '@/services/api';
import { API_CONSTANTS } from '@/services/endpoints';
import { StudioMetaStoreParam } from '@/pages/DataStudio/Toolbar/Catalog/data';
import { handleOption } from "@/services/BusinessCrud";
import { l } from "@/utils/intl";

export async function getMSSchemaInfo(params: StudioMetaStoreParam) {
  return (await postAll(API_CONSTANTS.STUDIO_GET_MSSCHEMA_INFO, params)).data;
}
export async function getMSCatalogs(params: StudioMetaStoreParam) {
  return (await postAll(API_CONSTANTS.STUDIO_GET_MSCATALOGS, params)).data;
}
export async function getMSColumns(params: StudioMetaStoreParam) {
  return (await postAll(API_CONSTANTS.STUDIO_GET_MSCOLUMNS, params)).data;
}
export async function dropMSTable(params: StudioMetaStoreParam) {
  return (await handleOption(API_CONSTANTS.STUDIO_DROP_MSTABLE, l('right.menu.delete'), params))
}
