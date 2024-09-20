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

export default async function () {
  const imports = (await import('@medusajs/medusa/dist/api/routes/store/collections/index')) as any

  const adminImports = (await import('@medusajs/medusa/dist/api/routes/admin/collections/index')) as any

  imports.allowedFields = [...imports.allowedFields, 'banner']

  adminImports.defaultAdminCollectionsFields = [...adminImports.defaultAdminCollectionsFields, 'banner']
}
