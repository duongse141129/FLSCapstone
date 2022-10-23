// ignore_for_file: prefer_const_literals_to_create_immutables, constant_identifier_names

import 'package:flutter/material.dart';

class MyDrawerList extends StatefulWidget {
  @override
  State<MyDrawerList> createState() => _MyDrawerListState();
}

class _MyDrawerListState extends State<MyDrawerList> {
  var currentPage = DrawerSection.contacts;
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.only(top: 15),
      child: Column(
        //show the list of menu drawer
        children: [
          menuItem(1, 'Dashboard', Icons.dashboard_outlined,
              currentPage == DrawerSection.dashboard ? true : false),
          menuItem(2, 'Contacts', Icons.people_alt_outlined,
              currentPage == DrawerSection.contacts ? true : false),
          menuItem(3, 'Events', Icons.event,
              currentPage == DrawerSection.events ? true : false),
          menuItem(4, 'Notes', Icons.notes,
              currentPage == DrawerSection.notes ? true : false),
          menuItem(5, 'Settings', Icons.settings_outlined,
              currentPage == DrawerSection.settings ? true : false),
          menuItem(6, 'Notification', Icons.notifications_outlined,
              currentPage == DrawerSection.notification ? true : false),
          menuItem(7, 'Privacy policy', Icons.privacy_tip_outlined,
              currentPage == DrawerSection.privacy_policy ? true : false),
          menuItem(8, 'Send feedback', Icons.feedback_outlined,
              currentPage == DrawerSection.send_feedback ? true : false),
        ],
      ),
    );
  }

  Widget menuItem(int id, String title, IconData icon, bool selected) {
    return Material(
      color: selected ? Colors.grey[300] : Colors.transparent,
      child: InkWell(
        onTap: () {
          Navigator.pop(context);
          setState(() {
            currentPage = DrawerSection.dashboard;
          });
        },
        child: Padding(
          padding: EdgeInsets.all(10),
          child: Row(
            children: [
              Expanded(
                child: Icon(
                  icon,
                  size: 20,
                  color: Colors.black,
                ),
              ),
              Expanded(
                flex: 3,
                child: Text(
                  title,
                  style: TextStyle(
                    color: Colors.black,
                    fontSize: 16,
                  ),
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}

enum DrawerSection {
  dashboard,
  contacts,
  events,
  notes,
  settings,
  notification,
  privacy_policy,
  send_feedback,
}
