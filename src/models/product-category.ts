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

import { Column, Entity, Tree, Index, TreeParent, TreeChildren, JoinColumn, BeforeInsert } from "typeorm"
import {
  ProductCategory as MedusaProductCategory,
} from "@medusajs/medusa"

@Entity()
@Tree('materialized-path')
@Index(['parent_category_id', 'rank'], { unique: true })
export class ProductCategory extends MedusaProductCategory {
  @Column({ nullable: true })
  banner?: string

  @TreeParent()
  @JoinColumn({ name: 'parent_category_id' })
  // @ts-ignore
  parent_category: ProductCategory | null

  @TreeChildren({ cascade: true })
  // @ts-ignore
  category_children: ProductCategory[]

}

