import React from 'react'

import classes from './NewProjectDrawer.module.css';

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const initiatedByText = 'Initiated By';
const initiatedDateText = 'Initiated Date';
const submitText = 'Submit';
const category1 = 'Category';
const category2 = 'Category 2';
const category3 = 'Category 3';
const category4 = 'Category 4';
const template1 = 'Template';
const template2 = 'Template 2';
const template3 = 'Template 3';
const template4 = 'Template 4';
const brand1 = 'Brand';
const brand2 = 'Brand 2';
const brand3 = 'Brand 3';
const brand4 = 'Brand 4';


const NewProjectDrawer = (props) => {

    const projectTitle = props.projectTitle;
    const initiatedBy = props.initiatedBy;
    const initiatedDate = props.initiatedDate;

    const navList = ['Info', 'Files', 'Stakeholders'];

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

    return (
        <div className={classes.container}>
            <div className={classes.box}>
                <div className={classes.header}>
                    <div className={classes.headerIcon}><FormatListBulletedIcon fontSize="large" className={classes.listIcon} /></div>
                </div>
                <div className={classes.headerData}>
                    <h1 className={classes.heading}>{projectTitle}</h1>
                    <nav className={classes.headerNav}>
                        <ul className={classes.navItems}>
                            {
                                navList.map((item) => {
                                    return <li key={Math.random()}>{item}</li>;
                                })
                            }
                        </ul>
                    </nav>
                </div>
            </div>
            <div className={classes.dataContainer}>
                <div className={classes.projectInfo}>
                    <div className={classes.instructions}>Instructions</div>
                    <div className={classes.instructionPoints}>
                        <p>Please follow below instructions:</p>
                        <div className={classes.insPts}>
                            1. To start your Project Workflow, please fill in the fields within the Request Info Tab.
                            <br />
                            2. Select the required Workflow Template.
                            <br />
                            3. Click on Files Tab to upload any file required by selecting the File type then click Add Files button to upload your file.
                            <br />
                            4. Click on the Stakeholders Tab to check if all the required activities and stakeholders information.</div>
                    </div>
                    <form onSubmit={onSubmitHandler}>
                        <div className={classes.row}>
                            <div className={classes.item}>
                                <p className={classes.title}>{initiatedByText}</p>
                                <div className={classes.value}>{initiatedBy}</div>
                            </div>
                            <div className={classes.item}>
                                <p className={classes.title}>{initiatedDateText}</p>
                                <div className={classes.value}>{initiatedDate}</div>
                            </div>
                            <div className={classes.item}>
                                <select name="template" id="template" required>
                                    <option value="template">{template1}</option>
                                    <option value="template2">{template2}</option>
                                    <option value="template3">{template3}</option>
                                    <option value="template4">{template4}</option>
                                </select>
                            </div>
                        </div>
                        <div className={classes.row}>
                            <div className={classes.item}>
                                <select name="category" id="category" required>
                                    <option value="category1">{category1}</option>
                                    <option value="category2">{category2}</option>
                                    <option value="category3">{category3}</option>
                                    <option value="category4">{category4}</option>
                                </select>
                            </div>
                            <div className={classes.item}>
                                <select name="brand" id="brand" required>
                                    <option value="brand1">{brand1}</option>
                                    <option value="brand2">{brand2}</option>
                                    <option value="brand3">{brand3}</option>
                                    <option value="brand4">{brand4}</option>
                                </select>
                            </div>
                            <div className={classes.item}>
                                <input type="text" placeholder='Product Code' name='productCode' required />
                            </div>
                        </div>
                        <div className={classes.row}>
                            <div className={classes.item}>
                                <input type="text" placeholder='SKU' name='sku' required />
                            </div>
                            <div className={classes.item}>
                                <input type="text" placeholder='Pack Size' name='packSize' required />
                            </div>
                            <div className={classes.item}>
                                <input className={classes.dateInput} type="date" placeholder='Due Date' name='dueDate' required />
                            </div>
                        </div>
                        <div className={classes.row}>
                            <div className={classes.item}>
                                <input type="text" placeholder='Reason for Request' name='reason' required />
                            </div>
                            <div className={classes.item}>
                                <button type="submit" className={classes.btn}>{submitText}</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>)
}

export default NewProjectDrawer