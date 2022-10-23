// ignore_for_file: prefer_final_fields, prefer_const_literals_to_create_immutables, avoid_unnecessary_containers

import 'package:date_picker_timeline/date_picker_timeline.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:intl/intl.dart';

class SchedulerPage extends StatefulWidget {
  const SchedulerPage({Key? key}) : super(key: key);

  @override
  State<SchedulerPage> createState() => _SchedulerPageState();
}

class _SchedulerPageState extends State<SchedulerPage> {
  final DatePickerController _controller = DatePickerController();
  DateTime _selectedDate = DateTime.now();
  @override
  Widget build(BuildContext context) {
    WidgetsBinding.instance.addPostFrameCallback((_) => executeAfterBuild());
    return Scaffold(
      appBar: _appBar(),
      body: Column(
        children: [
          _taskAppBar(),
          _addDateBar(),
          Container(
            margin: EdgeInsets.only(top: 10, left: 20, right: 20),
            child: Row(
              children: [
                Text(
                  'Time',
                  style: TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.bold,
                    fontFamily: GoogleFonts.lato().fontFamily,
                    color: Colors.grey,
                  ),
                ),
                SizedBox(width: 30),
                Text(
                  'Course',
                  style: TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.bold,
                    fontFamily: GoogleFonts.lato().fontFamily,
                    color: Colors.grey,
                  ),
                ),
              ],
            ),
          ),
          Container(
            margin: EdgeInsets.only(left: 20), //right
            child: Row(
              children: [
                Container(
                  child: Column(
                    children: [
                      Text('07:00'),
                      Text('09:15'),
                    ],
                  ),
                ),
                SizedBox(width: 40),
                Container(
                  padding: EdgeInsets.all(16),
                  margin: EdgeInsets.only(top: 20),
                  width: MediaQuery.of(context).size.width - 120,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(16),
                    color: Colors.blue,
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text('Java Web Application'),
                      Text('Class'),
                      Text('Room'),
                    ],
                  ),
                ),
              ],
            ),
          ),
          Container(
            margin: EdgeInsets.only(left: 20), //right
            child: Row(
              children: [
                Container(
                  child: Column(
                    children: [
                      Text('07:00'),
                      Text('09:15'),
                    ],
                  ),
                ),
                SizedBox(width: 40),
                Container(
                  padding: EdgeInsets.all(16),
                  margin: EdgeInsets.only(top: 20),
                  width: MediaQuery.of(context).size.width - 120,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(16),
                    color: Colors.blue,
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text('Java Web Application'),
                      Text('Class'),
                      Text('Room'),
                    ],
                  ),
                ),
              ],
            ),
          ),
          Container(
            margin: EdgeInsets.only(left: 20), //right
            child: Row(
              children: [
                Container(
                  child: Column(
                    children: [
                      Text('07:00'),
                      Text('09:15'),
                    ],
                  ),
                ),
                SizedBox(width: 40),
                Container(
                  padding: EdgeInsets.all(16),
                  margin: EdgeInsets.only(top: 20),
                  width: MediaQuery.of(context).size.width - 120,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(16),
                    color: Colors.blue,
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text('Java Web Application'),
                      Text('Class'),
                      Text('Room'),
                    ],
                  ),
                ),
              ],
            ),
          ),
          Container(
            margin: EdgeInsets.only(left: 20), //right
            child: Row(
              children: [
                Container(
                  child: Column(
                    children: [
                      Text('07:00'),
                      Text('09:15'),
                    ],
                  ),
                ),
                SizedBox(width: 40),
                Container(
                  padding: EdgeInsets.all(16),
                  margin: EdgeInsets.only(top: 20),
                  width: MediaQuery.of(context).size.width - 120,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(16),
                    color: Colors.blue,
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text('Java Web Application'),
                      Text('Class'),
                      Text('Room'),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  _appBar() {
    return AppBar(
      backgroundColor: Colors.green[700],
      elevation: 0,
      actions: [
        CircleAvatar(
          backgroundImage: AssetImage('assets/images/gaixinh.jpg'),
        ),
        SizedBox(
          width: 20,
        )
      ],
    );
  }

  _taskAppBar() {
    return Container(
      margin: EdgeInsets.only(right: 20, left: 20, top: 10),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Container(
            //margin: EdgeInsets.symmetric(horizontal: 20),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  DateFormat.yMMMMd().format(
                    _selectedDate,
                  ),
                  style: TextStyle(
                      fontSize: 20,
                      fontWeight: FontWeight.bold,
                      fontFamily: GoogleFonts.lato().fontFamily,
                      color: Colors.grey),
                ),
                Text(
                  'Today',
                  style: TextStyle(
                      fontSize: 26,
                      fontWeight: FontWeight.bold,
                      fontFamily: GoogleFonts.lato().fontFamily,
                      color: Colors.black),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  _addDateBar() {
    return Container(
      margin: EdgeInsets.only(top: 20, left: 20),
      child: DatePicker(
        DateTime(2022, 10, 01),
        height: 100,
        width: 72,
        initialSelectedDate: DateTime.now(),
        controller: _controller,
        selectionColor: Colors.blue,
        selectedTextColor: Colors.white,
        dateTextStyle: GoogleFonts.lato(
          textStyle: TextStyle(
              fontSize: 20, fontWeight: FontWeight.w600, color: Colors.grey),
        ),
        dayTextStyle: GoogleFonts.lato(
          textStyle: TextStyle(
              fontSize: 16, fontWeight: FontWeight.w600, color: Colors.grey),
        ),
        monthTextStyle: GoogleFonts.lato(
          textStyle: TextStyle(
              fontSize: 14, fontWeight: FontWeight.w600, color: Colors.grey),
        ),
        onDateChange: (date) {
          setState(() {
            _selectedDate = date;
          });
        },
      ),
    );
  }

  executeAfterBuild() {
    _controller.animateToSelection();
  }
}
