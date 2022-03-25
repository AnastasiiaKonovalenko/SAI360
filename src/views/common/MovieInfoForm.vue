<script>
    import TextInput from './TextInput.vue';
    import { Form } from "vee-validate";
    import * as Yup from "yup";
    import TextArea from './TextArea.vue';
    import { uuid } from '../../utils/uuid';

    export default {
        name: "EditMovieInfoForm",
        components: {
            TextArea,
            TextInput,
            Form
        },
        props: {
            movieItem: {
                type: Object,
                default: {}
            }
        },
        setup({movieItem}, {emit}) {
            const onSubmit = (values) => {
                emit('set-movie', {
                    "Title": values.title,
                    "Year": values.year,
                    "Runtime": values.runtime,
                    "Poster": values.link,
                    "Description": values.description,
                    "IMDbRating": values.rating,
                    "ClientRating": movieItem.ClientRating ? movieItem.ClientRating : null,
                    "id": movieItem.id ? movieItem.id : uuid(),
                })

                emit('close-dialog');
            }

            const onInvalidSubmit = () => {
                const submitBtn = document.querySelector(".submit-btn");
                submitBtn.classList.add("invalid");
                setTimeout(() => {
                    submitBtn.classList.remove("invalid");
                }, 1000);

                emit('close-dialog')
            }

            const schema = Yup.object().shape({
                title: Yup.string().required(),
                link: Yup.string().trim().matches(/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/ , 'Is not in correct format'),
                year: Yup.string().required(),
                runtime: Yup.string().required(),
                rating: Yup.number().max(5).required(),
                description: Yup.string().min(5).required()
            });

            return {
                onSubmit,
                schema,
                onInvalidSubmit,
                formItems: [
                    { label: 'Movie title', value: movieItem.Title, placeholder: 'Movie title', name: 'title' },
                    { label: 'Poster link', value: movieItem.Poster, placeholder: 'https://example.com', name: 'link' },
                    { label: "Year", value: movieItem.Year, placeholder: 'Year', name: 'year' },
                    { label: "Runtime", value: movieItem.Runtime, placeholder: 'Runtime', name: 'runtime' },
                    { label: 'IMDb rating', value:  movieItem.IMDbRating, placeholder: 'IMDb rating', name: 'rating'}
                ],
                description: {
                    label: 'Description',
                    value: movieItem.Description,
                    name: 'description'
                }
            };
        },
    }
</script>

<template>
    <div
        @click="onInvalidSubmit"
        class="movie-form fixed z-50 top-0 right-0 bottom-0 left-0 flex justify-center align-center">
        <div
            @click.stop
            class="bg-white m-10 p-4 rounded w-9/12 max-w-[500px] overflow-scroll">
            <Form
                @submit="onSubmit"
                :validation-schema="schema"
                @invalid-submit="onInvalidSubmit">
                <div
                    v-for="(item,idx) in formItems"
                    :key="idx"
                    class="movie-form__block">
                    <div class="flex flex-col grow">
                        <TextInput
                            v-model="item.value"
                            :label="item.label"
                            :name="`${item.name}`"
                            :id="idx"
                            type="text"
                            :value="item.value"
                            :placeholder="item.placeholder"/>
                    </div>
                </div>

                <TextArea
                    v-model="description.value"
                    :label="description.label"
                    :name="`${description.name}`"
                    id="description"
                    :value="description.value"
                    :placeholder="description.placeholder"/>
                <div class="flex">
                    <button class="submit-btn cancel-btn mr-2">Cancel</button>
                    <button class="submit-btn" type="submit">Submit</button>
                </div>
            </Form>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .movie-form {
        background: rgba(75,85,99, 0.3);
    }
    .submit-btn {
        background: var(--primary-color);
        outline: none;
        border: none;
        color: #fff;
        font-size: 18px;
        padding: 10px 15px;
        display: block;
        width: 100%;
        border-radius: 7px;
        margin-top: 40px;
        transition: transform 0.3s ease-in-out;
        cursor: pointer;
    }
    .submit-btn.invalid {
        background: var(--error-color);
        animation: shake 0.5s;
        /* When the animation is finished, start again */
        animation-iteration-count: infinite;
    }

    .cancel-btn {
        background: none;
        color: black;
        border: 2px solid var(--primary-color);
    }

    @keyframes shake {
        0% {
            transform: translate(1px, 1px);
        }
        10% {
            transform: translate(-1px, -2px);
        }
        20% {
            transform: translate(-3px, 0px);
        }
        30% {
            transform: translate(3px, 2px);
        }
        40% {
            transform: translate(1px, -1px);
        }
        50% {
            transform: translate(-1px, 2px);
        }
        60% {
            transform: translate(-3px, 1px);
        }
        70% {
            transform: translate(3px, 1px);
        }
        80% {
            transform: translate(-1px, -1px);
        }
        90% {
            transform: translate(1px, 2px);
        }
        100% {
            transform: translate(1px, -2px);
        }
    }
</style>