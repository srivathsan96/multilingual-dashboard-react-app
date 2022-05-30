import React from 'react'

import Drawer from 'react-modern-drawer'
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import classes from './DrawerSection.module.css';
import 'react-modern-drawer/dist/index.css'

import ProjectsDrawer from '../../pages/projects/ProjectsDrawer';
import ComponentsDrawer from '../../pages/home/ComponentsDrawer';
import NewProjectDrawer from '../../pages/newProject/NewProjectDrawer';

// Dummy Data

const projectTitle = 'New Project';
const initiatedBy = 'Approver';
const initiatedDate = '23-May-2022';


const DrawerSection = (props) => {


    const project = props.project;
    const product = props.product;

    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <div className={classes.drawerSection}>
            <MenuOutlinedIcon className={classes.icon} onClick={toggleDrawer} />
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='bla bla bla'
                size='50vw'
            >
                <div>
                    {props.page === 'project' && <ProjectsDrawer project={project} />}
                    {props.page === 'product' && <ComponentsDrawer product={product} />}
                    {props.page === 'newProject' && <NewProjectDrawer projectTitle={projectTitle} initiatedBy={initiatedBy} initiatedDate={initiatedDate} />}
                </div>
            </Drawer>
        </div>
    );
};

export default DrawerSection