import { ReactChildren, FunctionComponent, useState} from 'react'
import { Button, ProgressBar,Modal, Tooltip, FlexGrid, Row, Column, TextInput, Select, SelectItem, Tile, Link, NumberInput } from '@carbon/react';

const Index: FunctionComponent = ({
  children
}: {
  children: ReactChildren,
}) => {
    const [status, setOpen] = useState(false);
  return (
    <div>
        <Modal
            open = {status}
            passiveModal
            className="bg-white"
            modalHeading="Clear Objective"
            onRequestClose={()=>setOpen(false)}
            >
            <div className='mt-2'>
                <TextInput
                    id="text-input-1"
                    className="rounded-lg"
                    type="text"
                    labelText="Title"
                />
            </div>
            <div className='mt-4'>
                <div className='mb-1'>
                    <span className='inline-block text-xs'>Add a short description</span>
                    <span className='font-bold text-gray-500 text-xs ml-1'>(Optional)</span>
                    <Tooltip
                        align={'right'}
                        defaultOpen={false}
                        description={'Maximum 30 Characters'}
                        >
                        <button className="sb-tooltip-trigger" type="button">
                        </button>
                    </Tooltip>
                </div>
                <TextInput
                    id="text-input-2"
                    className="rounded-lg"
                    type="text"
                    warnText="Maximium 30 characters"
                    labelText=""
                />
            </div>
            <FlexGrid className="mt-4">
                <Row className="flex">
                    <Column className="flex-1">
                        <Tile>
                            Timeframe
                            <br />
                            <br />
                            <Link href="https://www.carbondesignsystem.com">Not Set</Link>
                        </Tile>
                    </Column>
                    <Column className="flex-1">
                        <Select
                            className="mt-4 max-w-[10rem]"
                            id="select-1"
                            defaultValue="placeholder-item"
                            labelText="Status"
                            >
                            <SelectItem value="option-1" text="In progress" />
                            <SelectItem value="option-2" text="Complete" />
                        </Select>
                    </Column>
                </Row>
            </FlexGrid>
            <div className='mt-4'>
                <span className='p-2'>Set your metrics</span>
                <div className='border border-solid metrics-wrapper rounded-md p-4 mb-4 mt-2'>
                    <span className='block mb-4'>Increasion conversion by 200%</span>
                    <div className='flex justify-between'>
                        <div className='flex items-center'>
                            <NumberInput
                              id="carbon-number1"
                              min={0}
                              max={500}
                              value={50}
                              label="Start"
                              invalidText="Number is not valid"
                              hideSteppers={true}
                            />
                            <span className='ml-1 mr-3'>to</span>
                            <NumberInput
                              id="carbon-number2"
                              min={0}
                              max={500}
                              value={50}
                              label="Target"
                              invalidText="Number is not valid"
                              hideSteppers={true}
                            />
                        </div>
                        <div className='flex'>
                            <NumberInput
                              id="carbon-number3"
                              min={0}
                              max={500}
                              value={200}
                              label="Current"
                              invalidText="Number is not valid"
                              hideSteppers={true}
                            ></NumberInput>
                            <span className='border border-solid border-gray-300 h-100 px-4 flex items-center rounded-lg'>%</span>
                        </div>
                    </div>
                </div>
                <button className='border border-solid border-gray-300 rounded-lg w-full py-2 text-2xl mb-2 hover:bg-gray-200 hover:border-gray-200 transition-all duration-300'>+</button>
                <ProgressBar
                    label={''}
                    helperText="You're the third of the way there alredy! Keep going"
                    value={75}
                />
                <div className='mt-2 text-right rounded-lg'>
                    <Button className="next-button" onClick={()=>setOpen(false)}>Next</Button>
                </div>
            </div>
       </Modal>
        <Button kind="primary" onClick={() => setOpen(true)}>
            Open modal
        </Button>
    </div>
  )
}

export default Index
