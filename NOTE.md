# To clone develop branch

-- git clone --branch dev-redux-toolkit url

# Important function in Redux-Toolkit

The **_createStore_** function in basic Redux is wrapped by **configureStore** function which automatically provides with middlewares and enhancers.
Classic reducer is replaced by **createReducer** function which makes the code shorter and simpler to understand.
The createAction() utility that returns an action creator function.
Redux createSlice() function that comes in handy to replace create action and create Reducer functions with a single function.
Redux createAsyncThunk() that takes Redux strings as arguments and returns a Promise.
Redux createEntityAdapter() utility that helps to perform CRUD operations.

# Releted Interview questions

## findIndex

The **findIndex()** method executes a function for each array element.
The **findIndex()** method returns the index (position) of the first element that passes a test.
The **findIndex()** method returns -1 if no match is found.

const ages = [3, 10, 18, 20];
ages.findIndex(checkAge);
function checkAge(age) {
return age > 18;
}

==> 3
