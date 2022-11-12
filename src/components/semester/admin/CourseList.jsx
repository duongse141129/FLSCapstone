import { Add, FileUploadOutlined } from '@mui/icons-material';
import { Box, Button, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material'
import React, { useState, useRef } from 'react';
import * as XLSX from "xlsx";

const CourseList = () => {
  const fileInput = useRef(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [courses, setCourses] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const clickImport = () => {
    fileInput.current.click();
  }

  const checkFileName = (name) => {
    const acceptableName = ['xlsx', 'xls'];
    return acceptableName.includes(name.split('.').pop().toLowerCase())
  }

  const changeFile = (e) => {
    const file = e.target.files[0];
    if(!file) return;

    if(!checkFileName(file.name)){
      alert('Please import file excel')
      return;
    }
    readExcel(file);
  }

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      console.log(d);
      setCourses(d);
    });

  }

  return (
    <Stack height='90vh' px={9} mt={4}>
      <Stack direction='row' mb={2} gap={2}>
        <input ref={fileInput} style={{ display: 'none' }} type="file" 
          onChange={(e) => changeFile(e)}
        />
        <Button variant='contained' size='small' endIcon={<FileUploadOutlined />}
          onClick={clickImport}>
          Import
        </Button>
        <Button variant='contained' size='small' endIcon={<Add />}>
          Add
        </Button>
      </Stack>
      <Stack>
        <Paper sx={{ minWidth: 700, mb: 2 }}>
          <TableContainer component={Box}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell size='small' className='subject-header'>Course</TableCell>
                  <TableCell size='small' className='subject-header'>Subject</TableCell>
                  <TableCell size='small' className='subject-header'>Slot</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  courses.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(course => (
                    <TableRow key={course.CourseID} hover>
                      <TableCell size='small'>{course.CourseID}</TableCell>
                      <TableCell size='small'>{course.SubjectID}</TableCell>
                      <TableCell size='small'>{course.SlotAmount}</TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 20]}
            component='div'
            count={courses.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            showFirstButton
            showLastButton
            sx={{
              bgcolor: 'ghostwhite'
            }}
          />
        </Paper>
      </Stack>
    </Stack>
  )
}

export default CourseList