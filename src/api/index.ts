/*
 * Copyright 2024 [abdullah-afzal](https://github.com/abdullah-afzal)
 *
 * MIT License
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { registerOverriddenValidators } from "@medusajs/medusa";
import { AdminPostProductCategoriesCategoryReq as PostProductCategory } from "@medusajs/medusa/dist/api/routes/admin/product-categories/update-product-category";
import { AdminPostCollectionsCollectionReq as updateCollectionReq } from "@medusajs/medusa";
import { IsString, IsOptional } from "class-validator";

export class AdminPostProductCategoriesCategoryReq extends PostProductCategory {
  @IsString()
  @IsOptional()
  banner?: string | null;
}

export class AdminPostCollectionsCollectionReq extends updateCollectionReq {
  @IsString()
  @IsOptional()
  banner?: string | null;
}

registerOverriddenValidators(AdminPostProductCategoriesCategoryReq);
registerOverriddenValidators(AdminPostCollectionsCollectionReq);
