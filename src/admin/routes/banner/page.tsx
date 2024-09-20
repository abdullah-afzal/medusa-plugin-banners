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

import { RouteConfig } from "@medusajs/admin"
import { Container, Table, Tabs, Toaster } from '@medusajs/ui'
import { Photo } from "@medusajs/icons"
import { useAdminProductCategories, useAdminCollections } from "medusa-react"
import { useNavigate } from "react-router-dom"
import { Box } from "@mui/material";
import { ProTab } from "../../ui-components/tabs/pro-tab";

const BannerPage = () => {
    const { product_categories, isLoading } = useAdminProductCategories()
    const { collections, isLoading: isCollectionsLoading } = useAdminCollections()
    const navigate = useNavigate();

    return (
        <>
            <Toaster />

            <Container>
                <Tabs defaultValue="categories">
                    <Tabs.List>
                        <Tabs.Trigger value="categories">Categories</Tabs.Trigger>
                        <Tabs.Trigger value="collections">Collections</Tabs.Trigger>
                    </Tabs.List>
                    <div className="mt-2">
                        <Tabs.Content value="categories">

                            <div className="mt-5">
                                <Table>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell className="w-2/5">Name</Table.HeaderCell>
                                            <Table.HeaderCell className="w-1/5">Handle</Table.HeaderCell>
                                            <Table.HeaderCell className="w-1/5">Status</Table.HeaderCell>
                                            <Table.HeaderCell className="w-1/5">Visibility</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>
                                    <Table.Body>
                                        {product_categories?.map((category) => {
                                            return (
                                                <Table.Row key={category.id} className="[&_td:last-child]:w-[1%] [&_td:last-child]:whitespace-nowrap" style={{ cursor: "pointer" }} onClick={() => navigate(`/a/banner/category/${category.id}`)}>
                                                    <Table.Cell>{category.name}</Table.Cell>
                                                    <Table.Cell>{category.handle}</Table.Cell>
                                                    <Table.Cell>{category.is_active ? 'Active' : 'Inactive'}</Table.Cell>
                                                    <Table.Cell>{!category.is_internal ? 'Public' : 'Private'}</Table.Cell>
                                                </Table.Row>
                                            )
                                        })}
                                    </Table.Body>
                                </Table>
                            </div>

                        </Tabs.Content>
                        <Tabs.Content value="collections">

                            <div className="mt-5">
                                <Table>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell className="w-2/4">Name</Table.HeaderCell>
                                            <Table.HeaderCell className="w-1/4">Handle</Table.HeaderCell>
                                            <Table.HeaderCell className="w-1/4">Products</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>
                                    <Table.Body>
                                        {collections?.map((collection) => {
                                            return (
                                                <Table.Row key={collection.id} className="[&_td:last-child]:w-[1%] [&_td:last-child]:whitespace-nowrap" style={{ cursor: "pointer" }} onClick={() => navigate(`/a/banner/collection/${collection.id}`)}>
                                                    <Table.Cell>{collection.title}</Table.Cell>
                                                    <Table.Cell>{collection.handle}</Table.Cell>
                                                    <Table.Cell>{collection.products?.length}</Table.Cell>
                                                </Table.Row>
                                            )
                                        })}
                                    </Table.Body>
                                </Table>
                            </div>

                        </Tabs.Content>
                        {process.env.MEDUSA_ADMIN_BANNERS_HIDE_PRO === undefined && <Tabs.Content value='pro'>
        <Box height={20}></Box>
        <ProTab/>
      </Tabs.Content>}
                    </div>
                </Tabs>
            </Container>

        </>
    )
}

export const config: RouteConfig = {
    link: {
        label: "Banners",
        icon: Photo,
    },
}

export default BannerPage