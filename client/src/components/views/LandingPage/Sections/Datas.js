// 체크박스를 통해 음식의 분류 및 가격을 지정하는 페이지

// 체크 박스를 위한 데이터 (왼쪽 Collapse)
const restaurantTypes = [
    {
        "_id": 1,
        "name": "한식"
    },
    {
        "_id": 2,
        "name": "양식"
    },
    {
        "_id": 3,
        "name": "중식"
    },
    {
        "_id": 4,
        "name": "일식"
    },
    {
        "_id": 5,
        "name": "퓨전"
    },
    {
        "_id": 6,
        "name": "제과"
    },
    {
        "_id": 7,
        "name": "디저트"
    }

]

// 가격을 위한 데이터 (오른쪽 Collapse)
const price = [
    {
        "_id": 0,
        "name": "Any",
        "array": []
    },
    {
        "_id": 1,
        "name": "￦0 to ￦199",
        "array": [0, 199]
    },
    {
        "_id": 2,
        "name": "￦200 to ￦249",
        "array": [200, 249]
    },
    {
        "_id": 3,
        "name": "￦250 to ￦279",
        "array": [250, 279]
    },
    {
        "_id": 4,
        "name": "￦280 to ￦299",
        "array": [280, 299]
    },
    {
        "_id": 5,
        "name": "More than ￦300",
        "array": [300, 1500000]
    }
]

// 다른 파일에서 사용할 수 있도록 둘 다 export
export {
    restaurantTypes,
    price
}