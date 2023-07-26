import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const options = [
    {
        value: "title",
        name: "name",
    },
    {
        value: "body",
        name: "description",
    },
];

function PostFilter({ filter = {}, setFilter = (f) => f }) {
    return (
        <div>
            <MyInput
                onChange={(e) =>
                    setFilter({ ...filter, query: e.target.value })
                }
                value={filter.query}
                type="text"
                placeholder="Search"
            />
            <MySelect
                value={filter.sort}
                onChange={(sort) => setFilter({ ...filter, sort })}
                defaultValue="Sort by"
                options={options}
            />
        </div>
    );
}

export default PostFilter;
