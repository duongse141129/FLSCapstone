import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Paper, Table, TableBody, 
  TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material';
import { useState } from 'react';

const ImportModal = ({ isImport, setIsImport, importCourses }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Dialog fullWidth={true} maxWidth='md'
      open={isImport} onClose={() => setIsImport(false)}
    >
      <DialogTitle>Import Courses</DialogTitle>
      <DialogContent>
        <Typography>Total: {importCourses.length}</Typography>
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
                  importCourses.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
            rowsPerPageOptions={[10, 20]} component='div'
            count={importCourses.length} rowsPerPage={rowsPerPage}
            page={page} onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            showFirstButton showLastButton
            sx={{ bgcolor: 'ghostwhite' }}
          />
        </Paper>
      </DialogContent>
      <DialogActions>
        <Button variant='outlined' color='info' onClick={() => setIsImport(false)}>Cancel</Button>
        <Button variant='contained' onClick={() => setIsImport(false)}>Add</Button>
      </DialogActions>
    </Dialog>
  )
}

export default ImportModal