import { render ,screen} from "@testing-library/react"
import Greet from "./Greet"

test('Greet Renders Correctly!',()=>{
    render(<Greet/>)
    const textElement = screen.getByText(/hello/i)
    expect(textElement).toBeInTheDocument()
})

