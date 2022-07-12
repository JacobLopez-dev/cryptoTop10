import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import guidesService from "./guidesService"

const initialState = {
    guides: [],
    guide: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Create Guide
export const createGuide = createAsyncThunk('guides/create',
  async(guideData, thunkApi) => {
    try {
      const token = thunkApi.getState().auth.user.token
      // Pass {title, desc, and markdown + user token to associate it as the author}
      return await guidesService.createGuide(guideData, token)
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

      return thunkApi.rejectWithValue(message)
    }
})


// Get guides
export const getGuides = createAsyncThunk('guides/get',
  async(_, thunkApi) => {
    try {
      return await guidesService.getGuides()
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
      return thunkApi.rejectWithValue(message)
    }
})

// Get single guide
export const getGuide = createAsyncThunk('guide/get', 
  async(slug, thunkApi) => {
    try {
      return await guidesService.getGuide(slug)
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
      return thunkApi.rejectWithValue(message)
    }
  }
)

// Update guide
export const updateGuide = createAsyncThunk('guides/update',
  async(guideData, thunkApi) => {
    try {
      const token = thunkApi.getState().auth.user.token
      // Pass {title, desc, and markdown + user token to associate it as the author}
      return await guidesService.updateGuide(guideData, token)
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
      return thunkApi.rejectWithValue(message)
    }
})

export const deleteGuide = createAsyncThunk('guide/delete', 
  async (slug, thunkApi) => {
    try {
      return await guidesService.deleteGuide(slug)
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
      return thunkApi.rejectWithValue(message)      
    }
  }
)

export const guideSlice = createSlice({
    name: 'guide',
    initialState,
    reducers: {
      resetGuides: (state) => initialState,
    },
    extraReducers: (builder) => {
      builder
      .addCase(createGuide.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createGuide.fulfilled, (state) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(createGuide.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getGuides.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getGuides.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.guides = action.payload
      })
      .addCase(getGuides.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getGuide.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getGuide.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.guide = action.payload
      })
      .addCase(getGuide.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteGuide.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteGuide.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.guides.filter(guide => guide.slug === action.payload.slug) 
      })
      .addCase(deleteGuide.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(updateGuide.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateGuide.fulfilled, (state) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(updateGuide.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
    },
  })
  
  export const {
      resetGuides,
  } = guideSlice.actions
  
  export default guideSlice.reducer