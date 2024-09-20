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

import { Column, Entity,Index , BeforeInsert, } from "typeorm";
import {  ProductCollection as MedusaCollection } from "@medusajs/medusa/dist/models/product-collection";


@Entity()
// @ts-ignore
export class ProductCollection extends MedusaCollection {
    @Column({ nullable: true })
    banner?: string
}
