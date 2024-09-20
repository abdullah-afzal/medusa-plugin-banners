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

import { useState, useEffect } from 'react';
import { Container, Heading, Button, toast, Text, IconButton } from "@medusajs/ui";
import { useMedusa, useAdminUpdateProductCategory, useAdminProductCategory } from "medusa-react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLongLeft, Trash } from "@medusajs/icons"

const EditCategoryBanner = () => {
    const { id } = useParams();
    const { product_category, isLoading } = useAdminProductCategory(id);

    const updateCategory = useAdminUpdateProductCategory(id)

    const { client } = useMedusa()
    const [img, setImg] = useState(null)
    const [selectedImg, setSelectedImg] = useState<string | null>(null)

    useEffect(() => {
        if(product_category)
        setSelectedImg(product_category?.banner)

    }, [product_category, isLoading])

    const navigate = useNavigate();
    function onClickCancel() {
        
        navigate("/a/banner")
    }

    const handleImgChange = (e) => {
        const file = e.target.files[0]
        setImg(file)
        setSelectedImg(URL.createObjectURL(file))
    }

    async function uploadImage(img) {
        try {
            const { uploads } = await client.admin.uploads.create(img)
            return uploads[0].url
        } catch (error) {
            console.error('Error uploading image:', error)
            return null
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let bannerUrl = selectedImg
            console.log(selectedImg)
            if (selectedImg) {
                bannerUrl = await uploadImage(img)
            }
            updateCategory.mutate({
                banner: bannerUrl,
            }, {
                onSuccess: () => {
                    toast.success('Success', {description: 'Banner Updated', position: 'top-right' })
                },
                onError: (error) => {
                    toast.error('Error', {description: `Banner Update Fail: ${error.message}`, position:'top-right' })
                }
            })
            onClickCancel()

        } catch (error) {
            console.error('Error creating rule:', error);
        }
    };

    return (
        <>
            <div onClick={onClickCancel} style={{
                cursor: "pointer",
                display: "inline-block",
                margin: "10px",
            }}>
                <Text style={{ display: "flex", alignItems: "center", }}><ArrowLongLeft /> Back to Banners</Text>
            </div>
            <Container style={{ margin: "5px" }}>
                <div className="flex items-center">
                    <Heading level="h1">Edit {product_category?.name} Category's Banner</Heading>
                </div>

                <br />
                <br />
                {!isLoading ? <> <div className="w-full m-2">
                    <div className="inter-small-semibold text-grey-50 flex w-full items-center mb-xsmall">
                        <label>Banner Image</label>
                    </div>

                    <div>{selectedImg ?
                        <div style={{ position: "relative", marginRight: "16px", marginBottom: "16px" }}>
                            <img src={selectedImg} alt="Selected Preview" style={{ width: '100px', height: 'auto' }} />
                            <IconButton
                                style={{
                                    position: "absolute",
                                    top: "0",
                                    // right: "0",
                                    padding: "4px",
                                    cursor: "pointer",
                                    margin: "4px",
                                }}
                                onClick={() => setSelectedImg(null)}
                            >
                                <Trash style={{ color: "red" }} />
                            </IconButton>
                        </div> : null}</div>

                    <div className="mt-large">
                        <div className="inter-base-regular text-grey-50 rounded-rounded border-grey-20 hover:border-violet-60 hover:text-grey-40 flex h-full w-full cursor-pointer select-none flex-col items-center justify-center border-2 border-dashed transition-colors py-large">
                            <div className="flex flex-col items-center">
                                <p>
                                    <span className="text-violet-60">
                                        <input
                                            name="img"
                                            id="img"
                                            accept="image/gif, image/jpeg, image/png, image/webp"
                                            type="file"
                                            onChange={handleImgChange}
                                        />
                                    </span>
                                </p>
                                170 x 170 recommended, up to 10MB
                            </div>
                        </div>
                    </div>
                </div>
                </> : "No matching record found, the sadness"}

                <Button onClick={handleSubmit} >
                    Update
                </Button>

            </Container>
        </>
    );
}

export default EditCategoryBanner;